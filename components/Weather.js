import React, { useState } from "react";
import { ImageBackground, Text } from "react-native";
import { StyleSheet } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecasatInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={style.backdrop}>
            <Text style={style.titleText}>Zip Code is {props.zipCode}</Text>
            <Text> </Text>
            <Forecast {...forecasatInfo}/>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    titleText: {
        fontSize: 18,
        fontWeight: "normal",
        color: '#312d24'
    }
})