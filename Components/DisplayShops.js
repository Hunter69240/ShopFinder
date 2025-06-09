import React from 'react';
import { View, StyleSheet,FlatList } from 'react-native';
import Card from './Card';

export default function DisplayShops({ shops }) {

  

   

  return (
    <FlatList
  data={shops}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <Card
      shopkey={item.id}
      name={item.name}
      latitude={item.latitude}
      longitude={item.longitude}
    />
  )}
/>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
});
