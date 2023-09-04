import React from "react";
import { FlatList, StyleSheet, View,Text } from "react-native";
import contacts from '../../../assets/data/contacts.json'
const ContactScreen =()=>{
    return(
        <View style={styles.TopView}>
        <FlatList
        data={contacts}
        renderItem={({item})=>(<Text style={styles.ContactsName}>{item.user_display_name}</Text>)}
        ItemSeparatorComponent={()=><View style={styles.seperator}/>}
        />
      </View>
    )
}


const styles = StyleSheet.create({
    TopView:{
      padding:15,
    },
    ContactsName:{
      fontSize:16,
      marginVertical:10,
    },
    seperator:{
      width:'100%',
      height:1,
      backgroundColor:'#dedede'
    }
  })

  export default ContactScreen