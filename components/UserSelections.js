import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppButton from './AppButton';

const UserSelections = props => {

    const toggleStyle = isSelected =>{
        let style = styles.unselectedButton
        if(isSelected){
            style=styles.selectedButton
        }
        return style
    }

    return (
        <View style={styles.selectionsContainer}>

            <View style={styles.row}>
                <AppButton
                    onPress={() => props.onPress('vegetarian')}
                    style={toggleStyle(props.selectedVegetarian)}
                    textStyle={!props.selectedVegetarian ? styles.unselectedButtonText : null}>
                    Vegetarian
                </AppButton>
                <AppButton
                    onPress={() => props.onPress('vegan')}
                    style={toggleStyle(props.selectedVegan)}
                    textStyle={!props.selectedVegan ? styles.unselectedButtonText : null}>
                    Vegan
                </AppButton>
            </View>
            <View style={styles.row}>
                <AppButton
                    onPress={() => props.onPress('glutenFree')}
                    style={toggleStyle(props.selectedGlutenFree)}
                    textStyle={!props.selectedGlutenFree ? styles.unselectedButtonText : null}>
                    Gluten-Free
                </AppButton>
                <AppButton
                    onPress={() => props.onPress('pescatarian')}
                    style={toggleStyle(props.selectedPescatarian)}
                    textStyle={!props.selectedPescatarian ? styles.unselectedButtonText : null}>
                    Pescatarian
                </AppButton>
            </View>
            <View style={styles.row}>
                <AppButton
                    onPress={() => props.onPress('paleo')}
                    style={toggleStyle(props.selectedPaleo)}
                    textStyle={!props.selectedPaleo ? styles.unselectedButtonText : null}>
                    Paleo
                </AppButton>
                <AppButton
                    onPress={() => props.onPress('whole30')}
                    style={toggleStyle(props.selectedWhole30)}
                    textStyle={!props.selectedWhole30 ? styles.unselectedButtonText : null}>
                    Whole30
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