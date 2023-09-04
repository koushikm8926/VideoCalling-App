import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactScreen from './src/screens/ContactScreen'


const App = () => {
  return (
    <SafeAreaView >
      <StatusBar barStyle={'default'} />
      <ContactScreen/>
    </SafeAreaView>
  )
}

export default App
