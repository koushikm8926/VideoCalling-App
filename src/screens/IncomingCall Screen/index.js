import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import ios_bg from '../../../assets/Images/ios_bg.jpg'

const IncomingCallScreen = () => {
  return (
   
      <ImageBackground source={ios_bg} style={styles.bg} resizeMode='cover'  blurRadius={1}>
        <Text style={styles.name}>Rahul</Text>
        <Text style={styles.phoneNumber}>+91 73 8481 0162</Text>
      </ImageBackground>
    
  )
}


const styles = StyleSheet.create({
  name:{
    fontSize:30,
    color:'white',
    marginTop:100,
    marginBottom:15,
    fontWeight:'bold',
},
phoneNumber:{
    color:'white',
    fontSize:20,
}, 
bg:{
  height:'100%',
  width:'100%',
  flex:1,
  alignItems:'center',
}
})
export default IncomingCallScreen