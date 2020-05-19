import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Result from './Result';

const ResultsList = props => {

    const renderResults = (result) => {
        const resultTitle = result.item.title;
        const resultImg = result.item.image;
        const resultNumIncluded = result.item.usedIngredientCount
        const resultNumNotIncluded = result.item.missedIngredientCount
        
        return (
            <Result 
                resultTitle={resultTitle}
                resultImg={resultImg}
                resultNumIncluded={resultNumIncluded}
                resultNumNotIncluded={resultNumNotIncluded}
            />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList
                keyExtractor={result => result.id.toString()}
                data={props.recipeResults}
                // data={this.state.recipeResults}
                renderItem={renderResults}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ResultsList;