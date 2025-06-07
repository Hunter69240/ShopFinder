import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ExpoLocation from 'expo-location'; 
import DisplayShops from './DisplayShops';
import { fetchShopsByCategory } from '../utils/overpass';
import { ActivityIndicator } from 'react-native';


const data = [
  { label: 'Stationary', value: '1' },
  { label: 'Print', value: '2' },
  { label: 'Bakery', value: '3' },
  { label: 'Dairy', value: '4' },
  { label: 'Pastry', value: '5' },
  { label: 'Wine', value: '6' },
  { label: 'Mall', value: '7' },
  { label: 'WholeSale', value: '8' },
  { label: 'Clothes', value: '9' },
  { label: 'Jewellers', value: '10' },
  { label: 'Shoes', value: '11' },
  { label: 'Medical Shop', value: '12' },
  { label: 'Electrical', value: '13' },
  { label: 'Houseware', value: '14' },
  { label: 'Car', value: '15' },
  { label: 'Petrol Pump', value: '16' },
  { label: 'Food', value: '17' }
];

const categoryMap = {
  '1': 'stationery',
  '2': 'copyshop',
  '3': 'bakery',
  '4': 'dairy',
  '5': 'pastry',
  '6': 'wine',
  '7': 'Mall',
  '8': 'wholesale',
  '9': 'clothes',
  '10': 'jewellers',
  '11': 'shoes',
  '12': 'medical_supply',
  '13': 'electrical',
  '14': 'houseware',
  '15': 'car',
  '16': 'fuel',
  '17': 'food'
};

export default function DropdownComponent({location}) {
  const [selectedValue, setSelectedValue] = useState(null);
  const [fetchedShops, setFetchedShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = async (item) => {
  setSelectedValue(item.value);
  const category = categoryMap[item.value];

  if (!location) {
    Alert.alert('Location not available', 'Please enable location permission in settings to find nearby shops.');
    return;
  }

  try {
    setLoading(true); 
    const shops = await fetchShopsByCategory(category, location.latitude, location.longitude);
    setFetchedShops(shops);
  } catch (error) {
    console.error('Error fetching shops:', error);
  } finally {
    setLoading(false); 
  }
};


  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={selectedValue}
        onChange={handleChange}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="appstore-o" size={20} />
        )}
      />
      {loading ? (
  <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
) : fetchedShops.length > 0 ? (
  <DisplayShops
    shops={fetchedShops.map(shop => ({
      id: shop.id,
      name: shop.name || shop.label,
      lat: shop.lat,
      lon: shop.lon
    }))}
  />
) : (
  <Text style={{ textAlign: 'center', marginTop: 20 }}>
    No shops found for this category.
  </Text>
)}

    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 5,
  },
});