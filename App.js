import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactScreen from './src/screens/ContactScreen'
import CallingScreen from './src/screens/CallingScreen'

const App = () => {
  return (
    <SafeAreaView >
      <StatusBar barStyle={'default'} />
      <CallingScreen/>
    </SafeAreaView>
  )
}

export default App
