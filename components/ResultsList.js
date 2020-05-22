import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Result from './Result';

const ResultsList = props => {

    const renderResults = (result) => {
        const resultId = result.item.id;
        const resultTitle = result.item.title;
        const resultImg = result.item.image;
        const resultNumIncluded = result.item.usedIngredientCount;
        const resultNumNotIncluded = result.item.missedIngredientCount;
        
        return (
            <Result 
                resultId = {resultId}
                resultTitle={resultTitle}
                resultImg={resultImg}
                resultNumIncluded={resultNumIncluded}
                resultNumNotIncluded={resultNumNotIncluded}
                onClick={props.onClick}
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
        alignItems: 'center',
        backgroundColor: '#F5F5DC'
    }
})

export default ResultsList;