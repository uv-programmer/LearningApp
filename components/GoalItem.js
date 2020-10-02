import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

const GoalItem = props => {

    return <View style={styles.listView}>
    <Text>{props.title}</Text>
  </View>

};

export default GoalItem;



const styles = StyleSheet.create({

    listView: {
        padding:10,
        borderColor: 'black',
        borderWidth:1,
        backgroundColor:'#ccc',
        marginVertical:10
      }
});