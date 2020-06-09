import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, ImageBackground } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import axios from 'axios';

import IngredientsList from '../components/IngredientsList';
import InstructionsList from '../components/InstructionsList';
import ExitButton from '../components/ExitButton';

import { Header } from 'react-native/Libraries/NewAppScreen';

const SelectedRecipeModal = props => {

    const { navigation } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [recipeDetails, setRecipeDetails] = useState(null);

    useEffect(() => {

        console.log('looking up selected recipe details')
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

    }, [])

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#800000" />
            </View>
        )
    }

    let recipeTitle;
    let recipeLength;
    let ingredientDetails;
    let imgUrl;
    let recipeSteps;

    if (!isLoading && recipeDetails) {
        recipeTitle = recipeDetails.title;
        recipeLength = recipeDetails.readyInMinutes;
        // list of extended ingredients
        ingredientDetails = recipeDetails.extendedIngredients;
        imgUrl = recipeDetails.image;
        recipeSteps = recipeDetails.analyzedInstructions[0].steps;
    }

    return (
        <ImageBackground 
            source={require('../assets/verticalwallpaper.jpg')}
            style={styles.backgroundImg}
        >
            {/* <View style={styles.detailsContainer}> */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Serving Time: {recipeLength} minutes</Text>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: imgUrl }} style={styles.img} />
                </View>
            </View>

            <View style={styles.ingredientsContainer}>
                <View style={styles.ingredientsTextContainer}>
                    <Text>Ingredients: </Text>
                </View>
                <IngredientsList
                    ingredients={ingredientDetails}
                />
            </View>

            <View style={styles.instructionsContainer}>
                <View style={styles.instructionsTextContainer}>
                    <Text>Instructions: </Text>
                </View>
                <InstructionsList
                    recipeSteps={recipeSteps}
                />
            </View>
            {/* </View> */}
        </ImageBackground>
    )
};

SelectedRecipeModal.navigationOptions = ({ navigation }) =>{

    headerTitle = navigation.getParam('selectedRecipeTitle')
    return {
        headerTitle: headerTitle,
        headerLeft: () =>(null),
        headerRight: () =>(
            <HeaderButtons HeaderButtonComponent={ExitButton}>
                <Item 
                    title='Close'
                    iconName={'close'}
                    onPress={() =>{
                        navigation.goBack();
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImg: {
        flex: 1,
        alignItems: 'center'
    },
    detailsContainer: {
        // flex: 1,
        width: '90%',
        backgroundColor: '#F5F5DC',
        marginVertical: 10,
        padding: 5,
        // justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
        // paddingHorizontal: 20,
        // paddingTop: 10,
        // paddingBottom: 20
    },
    headerContainer: {
        // flex: 1,
        height: '40%',
        width: '90%',
        backgroundColor: '#F5F5DC',
        marginVertical: 10,
        padding: 5,
        borderRadius: 10,
        alignItems: 'center'
    },
    headerText: {
        marginBottom: 5
    },
    imgContainer: {
        height: '85%',
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1
    },
    img: {
        height: '100%',
        width: '100%'
    },
    ingredientsTextContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 5,
        paddingLeft: 10
    },
    ingredientsContainer: {
        height: '10%',
        width: '90%',
        justifyContent: 'center',
        backgroundColor: '#F5F5DC',
        padding: 5,
        borderRadius: 10,
        marginBottom: 10
    },
    instructionsTextContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 5,
        paddingLeft: 10
    },
    instructionsContainer: {
        // flex: 1,
        height: '45%',
        width: '90%',
        justifyContent: 'center',
        backgroundColor: '#F5F5DC',
        padding: 5,
        borderRadius: 10,
        marginBottom: 10
    }
});

export default SelectedRecipeModal;