import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const CallingScreen = () => {
  return (
    <View style={styles.page}>
        
        <View style={styles.CameraPreview}>
            <Text style={styles.name}>Rahul</Text>
            <Text style={styles.phoneNumber}>+91 73 8481 0162</Text>
        </View>

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

export default CallingScreen