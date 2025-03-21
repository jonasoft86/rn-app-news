import { StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchBar from '@/components/SearchBar'
import { NewsDataType } from '@/types'
import axios from 'axios'
import BreakingNews from '@/components/BreakingNews'
import Categories from '@/components/Categories'
import NewsList from '@/components/NewsList'

const Home = () => {
  const { top : safeTop } = useSafeAreaInsets();
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);
  const [news, setNews] = useState<NewsDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBreakingNews();
    getNews();
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

  const getNews = async (category:string = '') => {
    try {
      let categoryString = '';
      if(category.length !== 0){
        categoryString = `&category=${category}`
      }
      const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&country=cl&language=es&image=1&removeduplicate=1&size=10${categoryString}`;
      const response = await axios .get(URL);

      if(response && response.data){
        setNews(response.data.results);
        setIsLoading(false)
      }
    } catch (err: any){
      console.log("Error Message: ", err.message)
    }
  }

  const onCatChange = (category: string) => {
    console.log('Category: ', category);
    setNews([]);
    getNews(category);
  }

  return (
    <ScrollView style={[styles.container, {paddingTop: safeTop}]}>
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
      <NewsList newsList={news}/>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
      flex: 1,
      margin: 4
    }
})