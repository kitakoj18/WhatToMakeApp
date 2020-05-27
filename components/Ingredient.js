import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from './Card';

const Ingredient = props =>{
    return (
        <Card style={styles.ingredientContainer}>
            <Text>{props.ingredient}</Text>
        </Card>
    )
};

const styles = StyleSheet.create({
    ingredientContainer: {
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 5
    }
});

export default Ingredient