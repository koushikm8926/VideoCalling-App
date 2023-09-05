import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import ios_bg from '../../../assets/Images/ios_bg.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const IncomingCallScreen = () => {
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
          <View style={styles.IconsContainer}>
            <View style={styles.IconButtonContainer}>
              <Feather name="x" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Decline</Text>
          </View>
          <View style={styles.IconsContainer}>
            <View style={[styles.IconButtonContainer, {backgroundColor:'blue'}]}>
               <Feather name="check" color="white" size={40} />
            </View>
            <Text style={styles.iconText}>Accept</Text>
          </View>
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
  height:'100%',
  width:'100%',
  flex:1,
  alignItems:'center',
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