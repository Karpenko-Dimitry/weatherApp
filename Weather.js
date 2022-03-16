import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({temp, condition}){
    console.log(condition);
    return (
        <LinearGradient
            style={styles.container}
            colors={weatherOptions[condition].gradient}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={60} color="white"/>
                    <Text style={styles.temp}>{temp}°</Text>
                </View>
                <View  style={styles.halfContainer}></View>
        </LinearGradient>               
    );
}

const weatherOptions = {
    Thunderstorm: {
        iconName: 'lightning-bolt',
        gradient: ['#141E30', '#243B55']
    },
    Drizzle: {
        iconName: 'weather-lightning-rainy',
        gradient: ['#3a7bd5', '#3a6073']
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#000046','#1CB5E0']
    },
    Snow: {
        iconName: 'snow',
        gradient: ['#83a4d4', '#b6fbff']
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B']
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED']
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4']
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b']
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED']
    },
    Clouds: {
        iconName: 'cloud',
        gradient: ['#757F9A', '#D7DDE8']
    },
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white'
    }
}) 