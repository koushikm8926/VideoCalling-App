import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import dummyContacts from '../../../assets/data/contacts.json';
import { useNavigation } from '@react-navigation/native';


const ContactScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredContacts, setfilteredContacts] = useState(dummyContacts);
  const navigation= useNavigation();
  
  useEffect(() => {
    const newContacts = dummyContacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    );
    setfilteredContacts(newContacts);
  }, [searchInput]);


  const callUser=(user)=>{
    navigation.navigate("Calling", {user})
  }


  return (
    <View style={styles.TopView}>
      <TextInput
        placeholder="search"
        style={styles.SearchInput}
        onChangeText={setSearchInput}
        value={searchInput}
      />
      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <Pressable onPress={()=>callUser(item)}>
            <Text style={styles.ContactsName}>{item.user_display_name}</Text>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TopView: {
    padding: 15,
    backgroundColor:'white',
    flex:1,
  },
  ContactsName: {
    fontSize: 16,
    marginVertical: 10,
  },
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: '#dedede',
  },
  SearchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
});

export default ContactScreen;
