import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredText,setText] = useState('');
  const [currentElement,setElement] = useState([]);
  const textHandler = (inputText) => {
    setText(inputText);
};
const printHandler = () => {
setElement(currentElement => [...currentElement,enteredText]);
};
  return (
    <View style={styles.screen}>
      <View style={styles.inputView}>
        <TextInput placeholder='Goal Name' style={styles.input} onChangeText={textHandler} value = {enteredText } />
        <Button title='Add' onPress = {printHandler}/>
      </View>
  <View><Text>{currentElement}</Text></View>
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
