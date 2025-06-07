import React,{useState,useCallback} from 'react';
import { Text ,StyleSheet,View} from 'react-native';    
import Header from '../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../Components/Card';
import { Linking } from 'react-native';
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
      {Object.entries(favourites).map(([key,shop])=>(
        <Card
          key={key}
          shopkey={key}
          name={shop.name}
          latitude={shop.latitude}
          longitude={shop.longitude}
          shops={Object.values(favourites)}
        />
      ))}

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