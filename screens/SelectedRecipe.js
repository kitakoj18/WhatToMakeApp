import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const SelectedRecipeModal = props =>{

    const { navigation } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [recipeDetails, setRecipeDetails] = useState({});

    useEffect(() =>{

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
            .then(response =>{
                const recipeDetails = response.data;
                // console.log(recipeDetails.instructions)
                setRecipeDetails(recipeDetails);
                setIsLoading(false);
            }) 

    }, [navigation])

    if(isLoading){
        return (
            <View>
                <Text>...Loading...</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>{recipeDetails.instructions}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SelectedRecipeModal;