import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppButton from './AppButton';

const UserSelections = props => {
    return (
        <View style={styles.selectionsContainer}>

            <View style={styles.row}>
                <AppButton style={styles.selectionButton}>
                    Vegetarian
                </AppButton>
                <AppButton style={styles.selectionButton}>
                    Vegan
                </AppButton>
            </View>
            <View style={styles.row}>
                <AppButton style={styles.selectionButton}>
                    Gluten-Free
                </AppButton>
                <AppButton style={styles.selectionButton}>
                    Pescatarian
                </AppButton>
            </View>
            <View style={styles.row}>
                <AppButton style={styles.selectionButton}>
                    Paleo
                </AppButton>
                <AppButton style={styles.selectionButton}>
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
    selectionButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 115,
        marginHorizontal: 20,
        borderRadius: 0
    }
})

export default UserSelections;