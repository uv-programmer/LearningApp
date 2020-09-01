import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputView}>
        <TextInput placeholder='Goal Name' style={styles.input} />
        <Button title='Add' />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputView: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input:{
    borderColor: 'black',
     borderWidth: 1, 
     padding: 5, 
     width: '80%'
  }
});
