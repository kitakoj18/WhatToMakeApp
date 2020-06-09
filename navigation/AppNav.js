import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartScreen from '../screens/Start';
import UserInputScreen from '../screens/UserInput';
import ResultsScreen from '../screens/Results';
import SelectedRecipeModal from '../screens/SelectedRecipe';

const defaultStackNavOptions = {
    headerTitle: 'WhatToMake?',
    headerTintColor: '#FFEBCD',
    headerStyle: {
        backgroundColor: '#800000'
    }
}

const AppNavigator = createStackNavigator({
    Start: {
        screen: StartScreen
    },
    UserInput: {
        screen: UserInputScreen
    },
    RecipeResults: {
        screen: ResultsScreen
    }
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const RootStack = createStackNavigator({
    Main: {
        screen: AppNavigator,
        navigationOptions: {
            headerShown: false
        }
    },
    SelectedRecipeModal: {
        screen: SelectedRecipeModal
    }
}, {
    mode: 'modal',
    defaultNavigationOptions: defaultStackNavOptions
    // headerMode: 'none'
})

export default createAppContainer(RootStack);