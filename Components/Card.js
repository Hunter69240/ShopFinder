import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Card({value}){

    return(
        <>
            <View>
                <Text style={styles.text}>{value.label}</Text>

            </View>
        </>
    )
    
   
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
});