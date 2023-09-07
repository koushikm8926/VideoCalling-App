import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CallScreen from '../screens/CallScreen'
import CallingScreen from '../screens/CallingScreen'
import ContactScreen from '../screens/ContactScreen'
import IncomingCallScreen from '../screens/IncomingCall Screen'


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='contacts' >
            <Stack.Screen name='contacts' component={ContactScreen} options={{headerShown:false}}/>
            <Stack.Screen name='call' component={CallScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Calling' component={CallingScreen} options={{headerShown:false}}/>
            <Stack.Screen name='IncomingCall' component={IncomingCallScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default Navigation