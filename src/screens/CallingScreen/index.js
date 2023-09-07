import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CallActionBox from '../../components/CallActionBox';
import { useNavigation, useRoute } from '@react-navigation/native';

const CallingScreen = () => {
    const navigation= useNavigation();
    const route= useRoute();
    const user= route.params.user;

    const goBack=()=>{
        navigation.pop()
    }

  return (
    <View style={styles.page}>
    
    <Pressable onPress={goBack} style={styles.backButton}>
        <Ionicons name="chevron-back" color="white" size={30} />
    </Pressable>

        <View style={styles.CameraPreview}>
            <Text style={styles.name}>{user.user_display_name}</Text>
            <Text style={styles.phoneNumber}>ringing +91 73 8481 0162</Text>
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
    backButton:{
        zIndex:50,
        left:10,
        top:20,
    }

})

export default CallingScreen