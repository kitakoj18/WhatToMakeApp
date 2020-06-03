import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

import AppButton from '../components/AppButton';

const StartScreen = props =>{
    return (
        <ImageBackground
            source={require('../assets/verticalwallpaper.jpg')}
            style={styles.imageBackground}
            imageStyle={{resizeMode: 'cover'}}
        >
            {/* <View style={styles.textContainer}>
                <Text style={styles.text}>
                    I have ingredients in the fridge but I don't know what to cook...
                </Text>
            </View> */}
            <AppButton 
                onPress={() =>{
                    props.navigation.navigate({
                        routeName: 'UserInput'
                    })
                }}
                style={styles.button}
            >
                Find something to cook!
            </AppButton>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex:1, 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textContainer: {
        width: '70%',
        alignItems: 'center',
        marginTop: 255,
        marginBottom: 10,
        // backgroundColor: '#800000'
        // paddingBottom: 20,
        // backgroundColor: '#FFDAB9'
    },
    text: {
        fontSize: 16,
        color: '#FFDAB9',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        width: '35%'
    }
})

export default StartScreen;