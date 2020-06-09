import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, ImageBackground, Keyboard } from 'react-native';

import { useDispatch } from 'react-redux';
import { togglePrefs } from '../store/actions/mealPref';

import Card from '../components/Card';
import AppButton from '../components/AppButton';
import UserSelections from '../components/UserSelections';

const UserInputScreen = props => {

    const [enteredIngredients, setEnteredIngredients] = useState('');

    const [selectedVegetarian, setSelectedVegetarian] = useState(false);
    const [selectedVegan, setSelectedVegan] = useState(false);
    const [selectedGlutenFree, setSelectedGlutenFree] = useState(false);
    const [selectedDairyFree, setSelectedDairyFree] = useState(false);
    const [selectedHealthy, setSelectedHealthy] = useState(false);
    const [selectedCheap, setSelectedCheap] = useState(false);

    const inputChangeHandler = inputText => {
        setEnteredIngredients(inputText)
    }

    const toggleSelectionHandler = (selectionType) =>{
        if(selectionType=='vegetarian'){
            const toggledSelection = !selectedVegetarian
            setSelectedVegetarian(toggledSelection)
        }
        if(selectionType=='vegan'){
            const toggledSelection = !selectedVegan
            setSelectedVegan(toggledSelection)
        }
        if(selectionType=='glutenFree'){
            const toggledSelection = !selectedGlutenFree
            setSelectedGlutenFree(toggledSelection)
        }
        if(selectionType=='dairyFree'){
            const toggledSelection = !selectedDairyFree
            setSelectedDairyFree(toggledSelection)
        }
        if(selectionType=='healthy'){
            const toggledSelection = !selectedHealthy
            setSelectedHealthy(toggledSelection)
        }
        if(selectionType=='cheap'){
            const toggledSelection = !selectedCheap
            setSelectedCheap(toggledSelection)
        }
    }

    const dispatch = useDispatch();
    useEffect(() =>{
        const updatedSelectedPrefs = {
            selectedVegetarian: selectedVegetarian,
            selectedVegan: selectedVegan,
            selectedGlutenFree: selectedGlutenFree,
            selectedDairyFree: selectedDairyFree,
            selectedHealthy: selectedHealthy,
            selectedCheap: selectedCheap
        }
        dispatch(togglePrefs(updatedSelectedPrefs));
    }, [selectedVegetarian, selectedVegan, selectedGlutenFree, selectedDairyFree, selectedHealthy, selectedCheap, dispatch])

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <ImageBackground
            source={require('../assets/verticalwallpaper.jpg')}
            style={styles.screen}
            imageStyle={{resizeMode: 'cover'}}
            >
                <View style={styles.inputTextContainer}>
                    <Text>What do you have in your refridgerator? </Text>
                </View>

                <Card style={styles.inputCard}>
                    <TextInput
                        style={styles.textInput}
                        value={enteredIngredients}
                        multiline={true}
                        placeholder='Separate by commas e.g. chicken, tomatoes, ...'
                        onChangeText={inputChangeHandler} 
                    />
                </Card>

                <View style={styles.userSelectionTextContainer}>
                    <Text>Select any dietary preferences: </Text>
                </View>

                <UserSelections 
                    onPress={toggleSelectionHandler}
                />

                <View style={styles.findButtonContainer}>
                    <AppButton 
                        style={styles.findButton}
                        onPress={() =>{
                            props.navigation.navigate({
                                routeName: 'RecipeResults',
                                params: {
                                    enteredIngredients: enteredIngredients,
                                    // selectedVegetarian: selectedVegetarian,
                                    // selectedVegan: selectedVegan,
                                    // selectedGlutenFree: selectedGlutenFree,
                                    // selectedPescatarian: selectedPescatarian,
                                    // selectedPaleo: selectedPaleo,
                                    // selectedWhole30: selectedWhole30
                                }
                            })
                        }}
                    >
                        SEARCH RECIPES
                    </AppButton>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

UserInputScreen.navigationOptions = {
    headerLeft: () => (null)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5F5DC'
    },
    inputCard: {
        marginVertical: 10,
        width: '85%',
        height: '25%',
        padding: 0,
        borderRadius: 25,
        overflow: 'hidden'
    },
    inputTextContainer: {
        height: 25,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: '#F5F5DC',
        borderRadius: 10
    },
    textInput: {
        flex: 1,
        textAlignVertical: 'top',
        backgroundColor: '#F5F5DC',
        padding: 15
    },
    userSelectionTextContainer: {
        height: 25,
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#F5F5DC',
        borderRadius: 10
    },
    findButtonContainer: {
        flex: 1,
        // justifyContent: 'center'
    },
    findButton: {
        marginVertical: 25
    }
})

export default UserInputScreen;