import { StyleSheet, Text, View, ImageBackground, Pressable, Alert } from 'react-native'
import React from 'react'
import ios_bg from '../../../assets/Images/ios_bg.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const IncomingCallScreen = () => {

  const onAccept=()=>{
    console.warn("on accept pressed");
  };
  const onDecline=()=>{
    console.warn("on decline pressed");
  };
  return (
      <ImageBackground source={ios_bg} style={styles.bg} resizeMode='cover'  blurRadius={1}>
        <Text style={styles.name}>Rahul</Text>
        <Text style={styles.phoneNumber}>WhatsApp Video ...</Text>

        <View style={[styles.row, {marginTop:'auto'}]}>
          <View style={styles.IconsContainer}>
              <Ionicons name="alarm" color="white" size={36} />
              <Text style={styles.iconText}>Remind Me</Text>
          </View>
          <View style={styles.IconsContainer}>
               <Entypo name="message" color="white" size={36} />
               <Text style={styles.iconText}>Message</Text>
          </View>
        </View>


        <View style={styles.row}>
          {/* this is decline button */}

          <Pressable style={styles.IconsContainer} onPress={onDecline}>
            <View style={styles.IconButtonContainer}>
              <Feather name="x" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Decline</Text>
          </Pressable>

          {/* this is accept  button */}
          <Pressable style={styles.IconsContainer} onPress={onAccept}> 
            <View style={[styles.IconButtonContainer, {backgroundColor:'blue'}]}>
               <Feather name="check" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Accept</Text>
          </Pressable>

        </View>
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
  flex:1,
  alignItems:'center',
  paddingBottom:50,
  padding:10,
},
row:{
  flexDirection:'row',
  width:'100%',
  justifyContent:'space-around',
},
IconsContainer:{
  alignItems:'center',
  marginVertical:20,
},
iconText:{
  color:'white'
}, 
IconButtonContainer:{
  backgroundColor:'red',
  padding:15,
  borderRadius:50,
  margin:10,
}

})
export default IncomingCallScreen