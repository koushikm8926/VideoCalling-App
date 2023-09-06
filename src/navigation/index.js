import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import CallScreen from '../screens/CallScreen'
import CallingScreen from '../screens/CallingScreen'
import ContactScreen from '../screens/ContactScreen'
import IncomingCallScreen from '../screens/IncomingCall Screen'

const Navigation = () => {
  return (
    <NavigationContainer>
         <CallScreen/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default Navigation