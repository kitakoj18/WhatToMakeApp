import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Ingredient from './Ingredient';

const IngredientsList = props =>{
    
    const renderIngredients = (result) =>{
        return (
            <Ingredient
                ingredient={result.item.originalString} 
            />
        )
    }
    
    return (
        <FlatList 
            keyExtractor={ingredient => ingredient.id.toString()}
            data={props.ingredients}
            renderItem={renderIngredients}
            horizontal={true}
        />
)
};

export default IngredientsList;