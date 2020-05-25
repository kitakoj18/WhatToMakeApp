import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

const SelectedRecipeModal = props => {

    const { navigation } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [recipeDetails, setRecipeDetails] = useState(null);

    useEffect(() => {

        // console.log('made it to useEffect')
        const selectedRecipeId = navigation.getParam('selectedRecipeId')
        const getRoute = 'https://webknox-recipes.p.rapidapi.com/recipes/' + selectedRecipeId + '/information'

        const API_KEY = ''
        const config = {
            headers: {
                "X-RapidAPI-Key": API_KEY
            }
        }

        axios.get(getRoute, config)
            .then(response => {
                const recipeDetails = response.data;
                // console.log(recipeDetails.instructions)
                setRecipeDetails(recipeDetails);
                setIsLoading(false);
            })

    }, [navigation])

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#800000" />
            </View>
        )
    }

    let recipeTitle;
    let ingredientDetails;
    let recipeLength;
    let imgUrl;
    let recipeInstructions;

    if (!isLoading && recipeDetails) {
        recipeTitle = recipeDetails.title;
        console.log(recipeTitle)
        // list of extended ingredients
        ingredientDetails = recipeDetails.extendedIngredients;
        recipeLength = recipeDetails.readyInMinutes;
        imgUrl = recipeDetails.image;
        recipeInstructions = recipeDetails.instructions;
    }

    return (
        <View style={styles.detailsContainer}>
            <View style={styles.titleContainer}>
                <Text>{recipeTitle}</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image source={{ uri: imgUrl }} style={styles.img} />
            </View>
            <View style={styles.servingTimeContainer}>
                <Text>Serving Time: {recipeLength} minutes</Text>
            </View>
            <View style={styles.instructionsContainer}>
                <Text>{recipeInstructions}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
        flex: 1,
        height: 400,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    titleContainer: {
        height: '10%',
        alignItems: 'center'
    },
    imgContainer: {
        height: '50%',
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1
    },
    img: {
        height: '100%',
        width: '100%'
    },
    servingTimeContainer: {
        height: '10%',
        alignItems: 'center'
    },
    instructionsContainer: {
        height: '30%'
    }
});

export default SelectedRecipeModal;