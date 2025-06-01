import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card({ value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{value.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
