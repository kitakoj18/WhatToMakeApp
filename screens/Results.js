import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';

import axios from 'axios';

import ResultsList from '../components/ResultsList';

class ResultsScreen extends Component {

    constructor(props) {
        super(props)

        this.enteredIngredients = this.props.navigation.getParam('enteredIngredients')

        this.state = {
            isLoading: true,
            //enteredIngredients: enteredIngredients,
            recipeResults: []
        };
    }

    componentDidMount() {
        
        const API_KEY = ''

        const {selectedVegetarian, 
            selectedVegan, 
            selectedGlutenFree, 
            selectedDairyFree, 
            selectedHealthy, 
            selectedCheap} = this.props.selectedPrefs; 

        const getRoute = 'https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients'

        const config = {
            params: {
                number: 1,
                ingredients: this.enteredIngredients,
                vegetarian: selectedVegetarian ? 'true' : 'false',
                vegan: selectedVegan ? 'true' : 'false',
                glutenFree: selectedGlutenFree ? 'true' : 'false',
                dairyFree: selectedDairyFree ? 'true' : 'false',
                veryHealthy: selectedHealthy ? 'true' : 'false',
                cheap: selectedCheap ? 'true' : 'false' 
            },
            headers: {
                "X-RapidAPI-Key": API_KEY
            }
        }

        axios.get(getRoute, config)
            .then(response => {
                const recipeResults = response.data;
                // console.log(recipeResults)
                this.setState({ recipeResults: recipeResults })
                this.setState({ isLoading: false })
            })
    }

    onSelectRecipeHandler = (id, title) =>{
        // add modal navigation and pass in selectedRecipeId to page
        this.props.navigation.navigate({
            routeName: 'SelectedRecipeModal',
            params: {
                selectedRecipeId: id,
                selectedRecipeTitle: title
            }
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#800000"/>
                </View>
            )
        }

        // if (!this.state.isLoading && recipeResults.length==0){
        //     return (
        //         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        //             <Text>No Results</Text>
        //             <Text>Try search again!</Text>
        //         </View>
        //     )
        // }

        return (
            <View style={styles.screen}>
                <ResultsList
                    recipeResults={this.state.recipeResults}
                    onClick={this.onSelectRecipeHandler}
                />
            </View>
        )
    };

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F5F5DC'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = state => {
    return {
        // define prop names
        selectedPrefs: state.mealPrefs.selectedPrefs
    };
}

export default connect(mapStateToProps)(ResultsScreen);