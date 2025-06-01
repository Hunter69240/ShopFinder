import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import DisplayShops from './DisplayShops';

const data = [
  { label: 'Stationary', value: '1' },
  { label: 'Print', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];


const shopData = {
  '1': [
    { label: 'Stationary Shop A' },
    { label: 'Stationary Shop B' },
  ],
  '2': [
    { label: 'Print Shop X' },
    { label: 'Print Shop Y' },
  ],
  '3': [{ label: 'Item 3 Shop' }],
  '4': [{ label: 'Item 4 Shop' }],
  '5': [{ label: 'Item 5 Shop' }],
  '6': [{ label: 'Item 6 Shop' }],
  '7': [{ label: 'Item 7 Shop' }],
  '8': [{ label: 'Item 8 Shop' }],
};

export default function DropdownComponent() {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={selectedValue}
        onChange={item => setSelectedValue(item.value)}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="appstore-o" size={20} />
        )}
      />

      {selectedValue && (
        <DisplayShops shops={shopData[selectedValue] || []} />
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
