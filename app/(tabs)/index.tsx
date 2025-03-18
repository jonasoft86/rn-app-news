import { View, StyleSheet } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchBar from '@/components/SearchBar'

const Home = () => {
  const { top : safeTop } = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: safeTop}]}>
      <Header />
      <SearchBar />
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