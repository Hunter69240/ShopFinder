import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import FavouritesScreen from "../Screens/FavouritesScreen";
import React from "react";


const Drawer= createDrawerNavigator
export default function SideNavigator() {
    return (
        <>
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Favourites" component={FavouritesScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        </>
    )

}

const styles = StyleSheet.create({
    
})