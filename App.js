import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';

export default function App(){
  const [list, setList] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((item) => item.json())
    .then((data) => setList(data))
    .catch(err => console.log(err))
  }, [])

  const renderItem = ({item}) => {
    return (
      <View key={item.id} style={{flexDirection: 'row', marginLeft: 5, backgroundColor: 'yellow', padding: 15, marginVertical: 9, marginHorizontal: 10}} >
        <Text style={{fontSize: 20}}>{item.id}</Text>
        <Text style={{fontSize: 20}}>{'.'}</Text>
        <Text style={{fontSize: 20, marginLeft: 10}} >{item.title}</Text>
      </View>
    )
  }

  return (
    <View>
      <View>
        <Text style={{fontSize: 25, textAlign: 'center'}} >List</Text>
      </View>
      <View>
        <FlatList 
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
          data={list}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  )
}