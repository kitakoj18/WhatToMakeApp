import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from './Card';

const Instruction = props => {
    return (
        <Card style={styles.stepContainer}>
            <Text>{props.step}</Text>
        </Card>
    )
};

const styles = StyleSheet.create({
    stepContainer: {
        justifyContent: 'center',
        marginBottom: 10
    }
})

export default Instruction;