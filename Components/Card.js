import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Card({ shopkey, name, latitude, longitude }) {
  const [favourite, setFavourite] = useState(false);

  const openMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url).catch(err => console.error('Error opening map:', err));
  };

 
  useEffect(() => {
    const loadFavouriteStatus = async () => {
      try {
        const favourites = JSON.parse(await AsyncStorage.getItem('favourites')) || {};
        if (favourites[shopkey]) {
          setFavourite(true);
        }
      } catch (error) {
        console.error('Error loading favourite status:', error);
      }
    };

    loadFavouriteStatus();
  }, [shopkey]);

  
  const toggleFavourite = async () => {
    try {
      const favourites = JSON.parse(await AsyncStorage.getItem('favourites')) || {};
      const newStatus = !favourite;

      if (newStatus) {
        favourites[shopkey] = { name, latitude, longitude };
      } else {
        delete favourites[shopkey];
        
      }

      await AsyncStorage.setItem('favourites', JSON.stringify(favourites));
      setFavourite(newStatus);
      console.log('Favourite updated:', shopkey, favourites[shopkey]);
    } catch (error) {
      console.error('Error storing favourite:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity onPress={openMap}>
        <Text style={styles.nav}>Open in Maps</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleFavourite} style={{padding: 10}}>
        <Text>{favourite?"Remove from Favourite":"Add to Favourite"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  nav: {
    color: 'blue',
    textDecorationLine: 'underline',
    justifyContent: 'space-between',
  },
});
