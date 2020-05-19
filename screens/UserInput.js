import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../components/Card';
import AppButton from '../components/AppButton';

const UserInputScreen = props => {

    const [enteredIngredients, setEnteredIngredients] = useState('');

    const inputChangeHandler = inputText => {
        setEnteredIngredients(inputText)
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <View style={styles.inputTextContainer}>
                    <Text>What do you have in your refridgerator? </Text>
                    {/* <Text>Separate by commas e.g. chicken, tomatoes, ...</Text> */}
                </View>

                <Card style={styles.inputCard}>
                    <TextInput
                        style={styles.textInput}
                        value={enteredIngredients}
                        multiline={true}
                        placeholder='Separate by commas e.g. chicken, tomatoes, ...'
                        onChangeText={inputChangeHandler} />
                </Card>

                <AppButton 
                    onPress={() =>{
                        props.navigation.navigate({
                            routeName: 'RecipeResults',
                            params: {
                                enteredIngredients: enteredIngredients
                            }
                        })
                    }}
                >
                    Find recipes!
                </AppButton>
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
    }
})

export default UserInputScreen;