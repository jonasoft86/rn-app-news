import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchBar from '@/components/SearchBar'
import { NewsDataType } from '@/types'
import axios from 'axios'
import BreakingNews from '@/components/BreakingNews'
import Categories from '@/components/Categories'

const Home = () => {
  const { top : safeTop } = useSafeAreaInsets();
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBreakingNews();
  }, [])
  
  const getBreakingNews = async() => {
    try {
      const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&country=cl&language=es&image=1&removeduplicate=1&size=5`
      const response = await axios.get(URL)

      if(response && response.data){
        setBreakingNews(response.data.results)
        setIsLoading(false)
      }
    } catch (err:any) {
      console.log('Error message: ',err.message)
    }
  }

  const onCatChange = (category: string) => {
    console.log('Category: ', category);
    //setNews([]);
    //getNews(category);
  }

  return (
    <View style={[styles.container, {paddingTop: safeTop}]}>
      <Header />
      <SearchBar />
      {
        isLoading ? (
          <ActivityIndicator size={'large'} />
        ): (
          <BreakingNews newsList={breakingNews} />
        )
      }
      <Categories onCategoryChanged={onCatChange}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
      flex: 1,
      margin: 4
    }
})