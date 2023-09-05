import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';



const CallingScreen = () => {
  return (
    <View style={styles.page}>
        <View style={styles.CameraPreview}>
            <Text style={styles.name}>Rahul</Text>
            <Text style={styles.phoneNumber}>+91 73 8481 0162</Text>
        </View>

        <View style={styles.buttonContainer}>
           <Ionicons name="camera-reverse" color="white"  size={30}/>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    page:{
        height:'100%',
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
        padding:10,
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
    
    }

})

export default CallingScreen