import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Card from './Card';

const Result = props => {

    return (
        <View style={styles.resultContainer}>
            <TouchableOpacity 
                style={styles.touchableArea}
                onPress={() => {
                    props.onClick(props.resultId, props.resultTitle)}
                }
            >
                <View style={styles.resultTitle}>
                    <Text style={styles.resultTitleText}>{props.resultTitle}</Text>
                </View>
                <View style={styles.resultImgContainer}>
                    <Image source={{ uri: props.resultImg }} style={styles.img} />
                </View>
            </TouchableOpacity>
            <View style={styles.resultDetailContainer}>
                <Text>Number of ingredients you have: {props.resultNumIncluded}</Text>
                <Text>Number of ingredients you don't have: {props.resultNumNotIncluded}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        height: 350,
        width: '100%',
        paddingHorizontal: 5,
        backgroundColor: '#F5F5DC',
        marginTop: 10,
        borderRadius: 10,
    },
    touchableArea: {
        height: '85%'
    },
    resultTitle: {
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 35
    },
    resultTitleText: {
        textAlign: 'center'
    },  
    resultImgContainer: {
        height: '88%',
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1
    },
    img: {
        height: '100%',
        width: '100%'
    },
    resultDetailContainer: {
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Result