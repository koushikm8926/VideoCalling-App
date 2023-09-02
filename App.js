import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const contacts =["koushik", "rahul", "mohit"]

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'default'} />
      <FlatList
      data={contacts}
      renderItem={({item})=>(<Text>{item}</Text>)}/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})