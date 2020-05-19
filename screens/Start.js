import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import AppButton from '../components/AppButton';

const StartScreen = props =>{
    return (
        <View style={styles.screen}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    I have ingredients in the fridge but I don't know what to cook...
                </Text>
            </View>
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
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5DC'
    },
    textContainer: {
        width: '70%',
        alignItems: 'center',
        paddingBottom: 20
    },
    text: {
        fontSize: 16,
        textAlign: 'center'
    },
    button: {
        width: '35%'
    }
})

export default StartScreen;