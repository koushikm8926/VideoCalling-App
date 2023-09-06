import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CallActionBox from '../../components/CallActionBox'

const CallScreen = () => {
  return (
    <View style={styles.page}>
         <View  style={styles.CameraPreview}/>
          <CallActionBox/>
    </View>
  )
}

export default CallScreen

const styles = StyleSheet.create({
  page:{
    height:'100%',
    backgroundColor:'grey'
},
  CameraPreview:{
   width:100,
   height:150,
   backgroundColor:'red',
   position:'absolute',
   right:10,
   top:100,
   borderRadius:10, 
},
})