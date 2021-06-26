import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const myName = 'Abdur'

const ComponentsScreen = () => {
    return <View>
    <Text style = {styles.textStyle}>Getting started with react native</Text>
    <Text style = {styles.subheadingStyle}> My name is {myName}</Text>
    </View>
};

const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 45
    },
    subheadingStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;