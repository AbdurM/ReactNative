import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = ()=> {
    return <View style={styles.viewStyle}>
        <View style = {styles.viewStyle2}/>
        <View style = {styles.viewStyle3}/>
        <View style = {styles.viewStyle4}/>
        
    </View>
};

const styles = StyleSheet.create({
viewStyle: {
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row'
},
viewStyle2: {
    height:100,
    width:100,
    borderColor: 'red',
    backgroundColor: 'red',
    borderWidth: 1
},
viewStyle3: {
    height:100,
    width:100,
    marginTop: 100,
    borderColor: 'green',
    backgroundColor: 'green',
    borderWidth: 1
},
viewStyle4: {
    height:100,
    width:100,
    borderColor: 'purple',
    backgroundColor: 'purple',
    borderWidth: 1
}
});

export default BoxScreen;