import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallActionBox = () => {

  const [isCameraOn, setIsCameraOn]= useState(true)
  const [ismicOn, setIsMicOn]= useState(true)
  const onReverseCamera=()=>{

  }
  const onToggleCamera=()=>{
    setIsCameraOn(currentValue=> !currentValue)
  }
  const onToggleMicrophone=()=>{
    setIsMicOn(currentValue=> !currentValue)
  }
  const onHangup=()=>{

  }

  return (
    <View style={styles.buttonContainer}>
    
    <Pressable style={styles.iconButton} onPress={onReverseCamera} >
      <Ionicons name="camera-reverse" color="white"  size={30}/>
    </Pressable>

    <Pressable style={styles.iconButton} onPress={onToggleCamera}>
      <MaterialIcons name={isCameraOn?"camera-off": "camera"} color="white"  size={30}/>
    </Pressable>

    <Pressable style={styles.iconButton} onPress={onToggleMicrophone}>
      <MaterialIcons name={ismicOn? "microphone-off": "microphone"} color="white"  size={30}/>
    </Pressable>

    <Pressable style={[styles.iconButton, {backgroundColor:'red'}]} onPress={onHangup}>
      <MaterialIcons name="phone-hangup" color="white"  size={30}/>
    </Pressable>

</View>

  )
}

export default CallActionBox

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#333333',
        padding:20,
        paddingBottom:40,
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'auto'
    },
    iconButton:{
        backgroundColor:'#4a4a4a',
        borderRadius:50,
        padding:15,
    }
})