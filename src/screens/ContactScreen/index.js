import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Text, TextInput} from 'react-native';
import dummyContacts from '../../../assets/data/contacts.json';

const ContactScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  // console.log(searchInput);
  const [filteredContacts, setfilteredContacts] = useState(dummyContacts);

  useEffect(() => {
    const newContacts = dummyContacts.filter(contact =>
      contact.user_display_name
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    );
    setfilteredContacts(newContacts);
  }, [searchInput]);

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
          <Text style={styles.ContactsName}>{item.user_display_name}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TopView: {
    padding: 15,
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
