import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Card from './Card';

const Result = props => {

    console.log(props.resultImg)
    return (
        <View style={styles.resultContainer}>
            <TouchableOpacity style={styles.touchableArea}>
                <View style={styles.resultTitle}>
                    <Text>{props.resultTitle}</Text>
                </View>
                <View style={styles.resultImgContainer}>
                    <Image source={{ uri: props.resultImg }} style={styles.img} />
                </View>
            </TouchableOpacity>
            <View style={styles.resultDetailContainer}>
                <Text>Included number of ingredients you entered: {props.resultNumIncluded}</Text>
                <Text>Included number of ingredients you did not enter: {props.resultNumNotIncluded}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        height: 350,
        width: '100%',
        marginTop: 10
        // borderColor: 'black',
        // borderWidth: 1
    },
    touchableArea: {
        height: '85%'
    },
    resultTitle: {
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center'
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