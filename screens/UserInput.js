import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../components/Card';
import AppButton from '../components/AppButton';
import UserSelections from '../components/UserSelections';

const UserInputScreen = props => {

    const [enteredIngredients, setEnteredIngredients] = useState('');

    const [selectedVegetarian, setSelectedVegetarian] = useState(false);
    const [selectedVegan, setSelectedVegan] = useState(false);
    const [selectedGlutenFree, setSelectedGlutenFree] = useState(false);
    const [selectedPescatarian, setSelectedPescatarian] = useState(false);
    const [selectedPaleo, setSelectedPaleo] = useState(false);
    const [selectedWhole30, setSelectedWhole30] = useState(false);

    const inputChangeHandler = inputText => {
        setEnteredIngredients(inputText)
    }

    // const toggleSelectionHandler = (selectionType) =>{
    //     if(selectionType=='vegetarian'){
    //         const toggledSelection = !selectedVegetarian
    //         setSelectedVegetarian(toggledSelection)
    //     }
    //     if(selectionType=='vegan'){
    //         const toggledSelection = !selectedVegan
    //         setSelectedVegan(toggledSelection)
    //     }
    //     if(selectionType=='glutenFree'){
    //         const toggledSelection = !selectedGlutenFree
    //         setSelectedGlutenFree(toggledSelection)
    //     }
    //     if(selectionType=='pescatarian'){
    //         const toggledSelection = !selectedPescatarian
    //         setSelectedPescatarian(toggledSelection)
    //     }
    //     if(selectionType=='paleo'){
    //         const toggledSelection = !selectedPaleo
    //         setSelectedPaleo(toggledSelection)
    //     }
    //     if(selectionType=='whole30'){
    //         const toggledSelection = !selectedWhole30
    //         setSelectedWhole30(toggledSelection)
    //     }
    // }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <View style={styles.inputTextContainer}>
                    <Text>What do you have in your refridgerator? </Text>
                </View>

                <Card style={styles.inputCard}>
                    <TextInput
                        style={styles.textInput}
                        value={enteredIngredients}
                        multiline={true}
                        placeholder='Separate by commas e.g. chicken, tomatoes, ...'
                        onChangeText={inputChangeHandler} />
                </Card>

                <View style={styles.userSelectionTextContainer}>
                    <Text>Select any dietary preferences: </Text>
                </View>

                {/* <UserSelections 
                    onPress={toggleSelectionHandler}
                    selectedVegetarian={selectedVegetarian}
                    selectedVegan={selectedVegan}
                    selectedGlutenFree={selectedGlutenFree}
                    selectedPescatarian={selectedPescatarian}
                    selectedPaleo={selectedPaleo}
                    selectedWhole30={selectedWhole30}    
                /> */}

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
                        Find recipes!
                    </AppButton>
                </View>
            </View>
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
        height: '25%'
    },
    inputTextContainer: {
        marginTop: 15,
        alignItems: 'center'
    },
    textInput: {
        textAlignVertical: 'top'
    },
    userSelectionTextContainer: {
        marginTop: 15
    },
    findButtonContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    findButton: {
        marginVertical: 50
    }
})

export default UserInputScreen;