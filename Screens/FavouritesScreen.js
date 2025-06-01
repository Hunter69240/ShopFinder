import React from 'react';
import { Text ,StyleSheet} from 'react-native';    
import Header from '../Components/Header';
export default function FavouritesScreen() {
  return (
    <>
    <Header />
      <Text style={styles.text}>
        Favourites Screen
      </Text>
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