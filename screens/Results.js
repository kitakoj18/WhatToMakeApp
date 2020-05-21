import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import axios from 'axios';

import ResultsList from '../components/ResultsList';

import { RECIPES } from '../data/dummy-data';

class ResultsScreen extends Component {

    constructor(props) {
        super(props)

        const { navigation } = this.props
        const enteredIngredients = navigation.getParam('enteredIngredients')
        // const selectedVegetarian = navigation.getParam('selectedVegetarian')
        // const selectedVegan = navigation.getParam('selectedVegan')
        // const selectedGlutenFree = navigation.getParam('selectedGlutenFree')
        // const selectedPescatarian = navigation.getParam('selectedPescatarian')
        // const selectedPaleo = navigation.getParam('selectedPaleo')
        // const selectedWhole30 = navigation.getParam('selectedWhole30')

        this.state = {
            isLoading: true,
            enteredIngredients: enteredIngredients,
            recipeResults: []
        };

    }

    componentDidMount() {
        API_KEY = ''
        const enteredIngredients = this.state.enteredIngredients

        // const selectionList = []
        // if(selectedVegetarian){
        //     selectionList.push('vegetarian')
        // }
        // if(selectedVegan){
        //     selectionList.push('vegan')
        // }
        // if(selectedGlutenFree){
        //     selectionList.push('glutenfree')
        // }
        // if(selectedPescatarian){
        //     selectionList.push('pescatarian')
        // }
        // if(selectedPaleo){
        //     selectionList.push('paleo')
        // }
        // if(selectedWhole30){
        //     selectionList.push('whole30')
        // }

        // const selections = selectionList.join(',')
        // const selectionRoute = '&diet=' + selections

        const getRoute = 'https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients'

        const config = {
            params: {
                number: 1,
                ingredients: this.state.enteredIngredients
            },
            headers: {
                "X-RapidAPI-Key": "6146aef00bmsh7b20b72247d654ap1bbe5cjsne1fee7d8bcaa"
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

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <Text>
                        ...Loading...
                    </Text>
                </View>
            )
        }

        return (
            <View style={styles.screen}>
                <ResultsList
                    recipeResults={this.state.recipeResults}
                />
            </View>
        )
    };

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F5F5DC'
    }
})

export default ResultsScreen;