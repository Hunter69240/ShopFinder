import React from 'react';
import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';
import Card from './Card';

const SMALL_BOTTOM_PADDING = 50;
const LARGE_BOTTOM_PADDING = 150;
const THRESHOLD = 3; // number of cards after which to increase padding

export default function DisplayShops({ shops }) {
  

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      {shops.map(shop => (
        <Card
          key={shop.id.toString()}
          shopkey={shop.id}
          name={shop.name}
          latitude={shop.lat}
          longitude={shop.lon}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    paddingBottom:'100%'
  },
});
