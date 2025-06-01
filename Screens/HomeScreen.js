import React,{useState} from 'react';
import { View, StyleSheet,Text} from 'react-native';
import Header from '../Components/Header';
import DropdownComponent from '../Components/DropDown';
import Card from '../Components/Card';
export default function HomeScreen() {
  const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.Text}>Welcome to Shop Finder</Text>
      <Text style={styles.TextSelect}>Select a category to find shops</Text>
      <DropdownComponent setSelectedItem={setSelectedItem} />

      {selectedItem && <Card value={selectedItem} />}

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
});
