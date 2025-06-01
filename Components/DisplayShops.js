import React from 'react';
import { View } from 'react-native';
import Card from './Card';

export default function DisplayShops({ shops }) {
  return (
    <View>
      {shops.map((shop, index) => (
        <Card key={index} value={shop} />
      ))}
    </View>
  );
}
