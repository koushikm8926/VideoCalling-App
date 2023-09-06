import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CallActionBox from '../../components/CallActionBox';

const CallingScreen = () => {
  return (
    <View style={styles.page}>
        <View style={styles.CameraPreview}>
            <Text style={styles.name}>Rahul</Text>
            <Text style={styles.phoneNumber}>+91 73 8481 0162</Text>
        </View>
        <CallActionBox/>

    </View>
  )
}

const styles = StyleSheet.create({
    page:{
        height:'100%',
        backgroundColor:'grey'
    },
    CameraPreview:{
        flex:1,
        alignItems:'center',
        backgroundColor:'grey',
        paddingTop:10,
        paddingHorizontal:10,
    },
    name:{
        fontSize:30,
        color:'white',
        marginTop:50,
        marginBottom:15,
        fontWeight:'bold',
    },
    phoneNumber:{
        color:'white',
        fontSize:20,
    }, 
})

export default CallingScreen