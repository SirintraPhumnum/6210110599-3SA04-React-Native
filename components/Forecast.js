import React from "react";
import { View } from "react-native-web";
import { Text } from "react-native-web";
import { StyleSheet } from "react-native-web";


export default function Forecast(props){
    return (
        <View style={style.backdrop}>
            <Text style={style.MainText}>{props.main}</Text>
            <Text> </Text>
            <Text style={style.DescriptionText}>{props.description}</Text>
            <Text> </Text>
            <Text style={style.CText}>{props.temp}°C</Text>
            
        </View>
        
    )
}

const style = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        //width: '100%',
        //height: '100%'
    },
    MainText: {
        fontSize: 30,
        fontWeight: "normal",
        color: '#312d24'
    },
    DescriptionText: {
        fontSize: 18,
        fontWeight: "normal",
        color: '#312d24'
    },
    CText: {
        fontSize: 30,
        fontWeight: "normal",
        color: '#312d24'
    }
})