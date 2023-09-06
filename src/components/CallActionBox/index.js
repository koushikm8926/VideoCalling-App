import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallActionBox = () => {
  return (
    <View style={styles.buttonContainer}>
    <View style={styles.iconButton}>
      <Ionicons name="camera-reverse" color="white"  size={30}/>
    </View>
    <View style={styles.iconButton}>
      <MaterialIcons name="camera-off" color="white"  size={30}/>
    </View>
    <View style={styles.iconButton}>
      <MaterialIcons name="microphone-off" color="white"  size={30}/>
    </View>
    <View style={[styles.iconButton, {backgroundColor:'red'}]}>
      <MaterialIcons name="phone-hangup" color="white"  size={30}/>
    </View>
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
    },
    iconButton:{
        backgroundColor:'#4a4a4a',
        borderRadius:50,
        padding:15,
    }
})