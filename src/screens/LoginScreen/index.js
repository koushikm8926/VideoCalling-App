import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {
  

    const [username, setUserName]= useState();
    const[ password, setPassword]= useState();

    const signIn=()=>{
        console.log("button pressed");
    }

    return (
    <View style={styles.page}>
     <TextInput placeholder='Username' style={styles.input} value={username} onChangeText={setUserName}  autoCapitalize="none/>
     <TextInput placeholder='Password' style={styles.input} value={password} onChangeText={setPassword} secureTextEntry/>     
     <Pressable style={styles.button} onPress={signIn}><Text>Signin</Text></Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    page:{
        padding:10,
        alignItems:'stretch',
 flex:1,
        justifyContent: 'center',
    },
    input:{
        backgroundColor:'white',
        marginVertical:10,
        padding:10,
        borderRadius:6,
    },
    button:{
        backgroundColor:'dodgerblue',
        borderRadius:6,
        marginVertical:10,
        padding:10,
        alignItems:'center', 
    }
})
export default LoginScreen