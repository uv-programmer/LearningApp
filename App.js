import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem.js'

export default function App() {
  const [enteredText,setText] = useState('');
  const [currentElement,setElement] = useState([]);
  const textHandler = (inputText) => {
    setText(inputText);
};
const printHandler = () => {
setElement(currentElement => [...currentElement,
  {id: Math.random.toString(), value:enteredText}]);
};
  return (
    <View style={styles.screen}>
   
      <View style={styles.inputView}>
     
        <TextInput placeholder='Goal Name' style={styles.input} onChangeText={textHandler} value = {enteredText } />
        <Button title='Add' onPress = {printHandler}/>
        
      </View>
       <ScrollView>
  <View>

    <FlatList keyExtractor = {(item, inde)=> item.id} 
    data ={currentElement} 
    renderItem={itemdata => <GoalItem title = {itemdata.item.value}/>} />
  
    </View>
    </ScrollView>
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
  },
 
});
