import React, { useState } from "react";
import { ImageBackground, Text } from "react-native";
import { StyleSheet } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecasatInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={style.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecasatInfo}/>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})