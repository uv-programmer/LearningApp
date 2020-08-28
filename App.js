import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
   <View style={{padding:50}}>
   <View style = {{flexDirection:'row', justifyContent:'space-between',alignItems:'center' }}>
     <TextInput placeholder='Goal Name' style = {{borderColor: 'black' , borderWidth: 1, padding: 5, width: '80%' }} />
     <Button title='Add'/>
   </View>
   <View></View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
