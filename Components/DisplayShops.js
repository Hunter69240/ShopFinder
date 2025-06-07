import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';

export default function DisplayShops({ shops }) {

  

   

  return (
    <View style={styles.container}>
      {shops.map((shop) => (
        <Card
          key={`${shop.id}`}
          shopkey={`${shop.id}`}
          name={shop.name}
          latitude={shop.lat}
          longitude={shop.lon}
          shops={shops}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
});
