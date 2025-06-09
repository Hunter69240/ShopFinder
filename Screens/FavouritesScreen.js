import React,{useState,useCallback} from 'react';
import { Text ,StyleSheet,FlatList} from 'react-native';    
import Header from '../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../Components/Card';

import { useFocusEffect } from '@react-navigation/native';



export default function FavouritesScreen() {
  const [favourites, setFavourites] = useState({});

  


  useFocusEffect(
  useCallback(() => {
    const loadFavourites = async () => {
      try {
        const storedFavourites = await AsyncStorage.getItem('favourites');
        if (storedFavourites) {
          setFavourites(JSON.parse(storedFavourites));
        } else {
          setFavourites({});
        }
      } catch (error) {
        console.error('Error loading favourites:', error);
      }
    };

    loadFavourites();
  }, [])
);


  return (
    <>
    <Header />
      <Text style={styles.text}>
        Favourites Screen
      </Text>
      <FlatList
  data={Object.entries(favourites).map(([key, shop]) => ({
    id: key,
    ...shop,
  }))}
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


    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 50,
  },
});