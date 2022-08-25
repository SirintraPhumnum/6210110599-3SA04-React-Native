import React, { useEffect, useState } from "react";
import { ImageBackground, Text } from "react-native-web";
import { StyleSheet } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecasatInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metri&APPID=52130b0e9e7152af49f8a58fa073faf5`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

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