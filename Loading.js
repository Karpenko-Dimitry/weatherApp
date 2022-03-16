import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#FDF6AA',
    },
    text: {
        color: '#2C2C2C',
        fontSize: 18,
    }
})

export default class extends React.Component {
    render() {
        return (
            
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                <Text style={styles.text}>Загрузка поssгоды ...</Text>
            </View>
        );
    } 
}