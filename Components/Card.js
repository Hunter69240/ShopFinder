import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
export default function Card({ name,latitude,longitude }) {
  const openMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url).catch(err => console.error('Error opening map:', err));
  };

  const [favourite, setFavourite] = useState(false);

  return (
   <>
    <View style={styles.container}>
          
            <Text style={styles.text}>{name}</Text>
            <TouchableOpacity onPress={openMap}>
              <Text style={styles.nav}>Open in Maps</Text>
            </TouchableOpacity> 
            
            <TouchableOpacity onPress={() => setFavourite(!favourite)}>
              <Icon
              name={favourite ? 'star' : 'star-o'}
           size={30}
           color={favourite ? 'gold' : 'gray'}
              />
            </TouchableOpacity>
          

    </View>
   </>
  );
}
const styles = StyleSheet.create({
  
  container: {
  justifyContent:'space-between',
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
  nav:{
   color: 'blue',
   textDecorationLine: 'underline',
   justifyContent: 'space-between',
  }
});
