import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactScreen from './src/screens/ContactScreen'
import CallingScreen from './src/screens/CallingScreen'
import IncomingCallScreen from './src/screens/IncomingCall Screen'
import CallScreen from './src/screens/CallScreen'
const App = () => {
  return (
    <>
      <StatusBar barStyle={'default'} />
     <CallScreen/>
    </>
   
  )
}

export default App
