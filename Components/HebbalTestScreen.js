import React from 'react';
import { View, StyleSheet } from 'react-native';
import DisplayShops from './DisplayShops'; // Adjust path if needed

export default function HebbalTestScreen() {
  const hebbalShops = [
    { id: 'hebbal-1', name: 'Hebbal Print Point', latitude: 13.0358, longitude: 77.5970 },
    { id: 'hebbal-2', name: 'Hebbal Stationery Hub', latitude: 13.0361, longitude: 77.5965 },
    { id: 'hebbal-3', name: 'Quick Copy Hebbal', latitude: 13.0355, longitude: 77.5975 },
    { id: 'hebbal-4', name: 'Xpress Prints', latitude: 13.0363, longitude: 77.5978 },
    { id: 'hebbal-5', name: 'Ink & Paper', latitude: 13.0350, longitude: 77.5962 },
    { id: 'hebbal-6', name: 'Speedy Xerox', latitude: 13.0347, longitude: 77.5959 },
    { id: 'hebbal-7', name: 'The Print Studio', latitude: 13.0368, longitude: 77.5981 },
    { id: 'hebbal-8', name: 'PaperTown Hebbal', latitude: 13.0353, longitude: 77.5989 },
    { id: 'hebbal-9', name: 'DocuPrint Zone', latitude: 13.0360, longitude: 77.5960 },
    { id: 'hebbal-10', name: 'Hebbal Copy Corner', latitude: 13.0349, longitude: 77.5973 },
  ];

  return (
    <View style={styles.container}>
      <DisplayShops shops={hebbalShops} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 24,
  },
});
