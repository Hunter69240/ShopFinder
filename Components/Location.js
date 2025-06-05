import React,{useState} from 'react';
import * as Location from 'expo-location';
import fetchShopsByCategory from '../utils/overpass';
export default function Location() {
    const [error,Seterror]= useState('');
    const [latitude,Setlatitude]= useState('');
    const [longitude,Setlongitude]= useState('');

    const getuserLocation = async () => {
        let {status}= await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Seterror('Permission to access location was denied');
            return;
        }

        let {coords} = await Location.getCurrentPositionAsync({});

        if(coords){
            const {latitude,longitude} = coords;
            Setlatitude(latitude);
            Setlongitude(longitude);

            let response=await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });

            console.log(response);
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        }
    }

    return (
       <fetchShopsByCategory
        latitude={latitude}
        longitude={longitude}
        error={error}
        getuserLocation={getuserLocation}/>
    )
}