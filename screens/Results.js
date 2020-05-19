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

        this.state = {
            isLoading: true,
            enteredIngredients: enteredIngredients,
            recipeResults: []
        };

    }

    // componentDidMount(){
    //     API_KEY = ''
    //     const enteredIngredients = this.state.enteredIngredients
    //     const getRoute = 'https://api.spoonacular.com/recipes/findByIngredients?number=2&ingredients=' + enteredIngredients + '&apiKey=' + API_KEY
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