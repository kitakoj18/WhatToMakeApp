import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import AppButton from './AppButton';

const UserSelections = props => {

    const toggleStyle = isSelected =>{
        let style = styles.unselectedButton
        if(isSelected){
            style=styles.selectedButton
        }
        return style
    }

    const {selectedVegetarian, selectedVegan, selectedGlutenFree, selectedDairyFree, selectedHealthy, selectedCheap} = useSelector(state => state.mealPrefs);

    return (
        <View style={styles.selectionsContainer}>

            <View style={styles.row}>
                <AppButton
                    onPress={() => props.onPress('vegetarian')}
                    style={toggleStyle(selectedVegetarian)}
                    textStyle={!selectedVegetarian ? styles.unselectedButtonText : null}>
                    Vegetarian
                </AppButton>
                <AppButton
                    onPress={() => props.onPress('vegan')}
                    style={toggleStyle(selectedVegan)}
                    textStyle={!selectedVegan ? styles.unselectedButtonText : null}>
                    Vegan
                </AppButton>
            </View>
            <View style={styles.row}>
                <AppButton
                    onPress={() => props.onPress('glutenFree')}
                    style={toggleStyle(selectedGlutenFree)}
                    textStyle={!selectedGlutenFree ? styles.unselectedButtonText : null}>
                    Gluten-Free
                </AppButton>
                <AppButton
                    onPress={() => props.onPress('dairyFree')}
                    style={toggleStyle(selectedDairyFree)}
                    textStyle={!selectedDairyFree ? styles.unselectedButtonText : null}>
                    Dairy-Free
                </AppButton>
            </View>
            <View style={styles.row}>
                <AppButton
                    onPress={() => props.onPress('healthy')}
                    style={toggleStyle(selectedHealthy)}
                    textStyle={!selectedHealthy ? styles.unselectedButtonText : null}>
                    Healthy
                </AppButton>
                <AppButton
                    onPress={() => props.onPress('cheap')}
                    style={toggleStyle(selectedCheap)}
                    textStyle={!selectedCheap ? styles.unselectedButtonText : null}>
                    Cheap (less than $30)
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
        width: 115,
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
        width: 115,
        marginHorizontal: 20,
        borderRadius: 0
    }
})

export default UserSelections;