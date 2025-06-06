import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';

export default function DisplayShops({ shops }) {
  
  return (
    <View style={styles.container}>
      {shops.map((shop, index) => (
        <Card
          key={index}
          name={shop.name}
          latitude={shop.lat}
          longitude={shop.lon}
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
