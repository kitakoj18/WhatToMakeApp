import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const AppButton = props =>{
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={styles.buttonText}t>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#800000',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
        width: '50%'
    },
    buttonText: {
        color: '#FFDAB9',
        textAlign: 'center'
    }
})

export default AppButton;