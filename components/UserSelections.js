import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import AppButton from './AppButton';

const UserSelections = props => {

    const toggleButtonStyle = isSelected =>{
        let style = styles.unselectedButton;
        if(isSelected){
            style=styles.selectedButton
        }
        return style
    }

    const toggleButtonText = isSelected =>{
        let style = null;
        if(!isSelected){
            style = styles.unselectedButtonText
        }
        return style
    }

    const {selectedVegetarian, 
        selectedVegan, 
        selectedGlutenFree, 
        selectedDairyFree, 
        selectedHealthy, 
        selectedCheap} = useSelector(state => state.mealPrefs.selectedPrefs); 
        // mealPrefs is the reducer in App.js managing the state and selectedPrefs is a property defined in the state object

    return (
        <View style={styles.selectionsContainer}>

            <View style={styles.row}>
                <AppButton
                    onPress={() => props.onPress('vegetarian')}
                    style={toggleButtonStyle(selectedVegetarian)}
                    textStyle={toggleButtonText(selectedVegetarian)}>
                    Vegetarian
                </AppButton>
                <AppButton
                    onPress={() => props.onPress('vegan')}
                    style={toggleButtonStyle(selectedVegan)}
                    textStyle={toggleButtonText(selectedVegan)}>
                    Vegan
                </AppButton>
            </View>
            <View style={styles.row}>
                <AppButton
                    onPress={() => props.onPress('glutenFree')}
                    style={toggleButtonStyle(selectedGlutenFree)}
                    textStyle={toggleButtonText(selectedGlutenFree)}>
                    Gluten-Free
                </AppButton>
                <AppButton
                    onPress={() => props.onPress('dairyFree')}
                    style={toggleButtonStyle(selectedDairyFree)}
                    textStyle={toggleButtonText(selectedDairyFree)}>
                    Dairy-Free
                </AppButton>
            </View>
            <View style={styles.row}>
                <AppButton
                    onPress={() => props.onPress('healthy')}
                    style={toggleButtonStyle(selectedHealthy)}
                    textStyle={toggleButtonText(selectedHealthy)}>
                    Healthy
                </AppButton>
                <AppButton
                    onPress={() => props.onPress('cheap')}
                    style={toggleButtonStyle(selectedCheap)}
                    textStyle={toggleButtonText(selectedCheap)}>
                    Cheap (~$30)
                </AppButton>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    selectionsContainer: {
        height: '35%',
        width: '100%',
        marginVertical: 10
    },
    row: {
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    unselectedButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 125,
        marginHorizontal: 20,
        borderRadius: 0,
        borderColor: '#800000',
        borderWidth: 1,
        backgroundColor: '#F5F5DC'
    },
    unselectedButtonText: {
        color: '#800000'
    },
    selectedButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 125,
        marginHorizontal: 20,
        borderRadius: 0
    }
})

export default UserSelections;