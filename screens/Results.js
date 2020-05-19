import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

import axios from 'axios';

import ResultsList from '../components/ResultsList';

import { RECIPES } from '../data/dummy-data';

class ResultsScreen extends Component{

    constructor(props){
        super(props)

        const { navigation } = this.props
        const enteredIngredients = navigation.getParam('enteredIngredients')
        const selectedVegetarian = navigation.getParam('selectedVegetarian')
        const selectedVegan = navigation.getParam('selectedVegan')
        const selectedGlutenFree = navigation.getParam('selectedGlutenFree')
        const selectedPescatarian = navigation.getParam('selectedPescatarian')
        const selectedPaleo = navigation.getParam('selectedPaleo')
        const selectedWhole30 = navigation.getParam('selectedWhole30')

        this.state = {
            isLoading: true,
            enteredIngredients: enteredIngredients,
            recipeResults: []
        };

    }

    // componentDidMount(){
    //     API_KEY = ''
    //     const enteredIngredients = this.state.enteredIngredients

    //     const selectionList = []
    //     if(selectedVegetarian){
    //         selectionList.push('vegetarian')
    //     }
    //     if(selectedVegan){
    //         selectionList.push('vegan')
    //     }
    //     if(selectedGlutenFree){
    //         selectionList.push('glutenfree')
    //     }
    //     if(selectedPescatarian){
    //         selectionList.push('pescatarian')
    //     }
    //     if(selectedPaleo){
    //         selectionList.push('paleo')
    //     }
    //     if(selectedWhole30){
    //         selectionList.push('whole30')
    //     }

    //     const selections = selectionList.join(',')
    //     const selectionRoute = '&diet=' + selections

    //     const getRoute = 'https://api.spoonacular.com/recipes/findByIngredients?number=2&ingredients=' + enteredIngredients + '&apiKey=' + API_KEY + selectionRoute
    //     axios.get(getRoute)
    //         .then(response =>{
    //             const recipeResults = response.data;
    //             // console.log(recipeResults)
    //             this.setState({ recipeResults: recipeResults })
    //             this.setState({ isLoading: false })
    //         })
    // }

    render() {
        // if(this.state.isLoading){
        //     return (
        //         <View>
        //             <Text>
        //                 ...Loading...
        //             </Text>
        //         </View>
        //     )
        // }
        
        return (
            <ResultsList 
                recipeResults={RECIPES}
            />
        )
    };

};

export default ResultsScreen;