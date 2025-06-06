import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert, TouchableOpacity,Linking } from 'react-native';
import * as Location from 'expo-location';
import Header from '../Components/Header';
import DropdownComponent from '../Components/DropDown';

export default function HomeScreen() {
  const [location, setLocation] = useState(null);

  const fetchLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    Alert.alert(
      'Location Required',
      'ShopFinder requires location access. Please enable location permission from your device settings.',
      [
        { text: 'Disable', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => Linking.openSettings()
        }
      ],
      { cancelable: false }
    );
    return;
  }

  const { coords } = await Location.getCurrentPositionAsync({});
  setLocation(coords);
};


  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.Text}>Welcome to Shop Finder</Text>
      <Text style={styles.TextSelect}>Select a category to find shops</Text>
      <DropdownComponent location={location} />
      <TouchableOpacity
        onPress={fetchLocation}
        style={location ? styles.enabledButton : styles.disabledButton}
      >
        <Text style={styles.buttonText}>
          {location ? 'Location Enabled' : 'Enable Location'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  TextSelect: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  enabledButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  disabledButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
