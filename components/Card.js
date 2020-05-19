import React from 'react';
import { View, StyleSheet} from 'react-native';

// template for card view; purely stylistic 

const Card = props =>{
    return(
        // get the default styles below and pass in optional props.style to merge into new styles object
        // since props.style is second, anything there will override what's in styles.card 
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset : {width: 0, height: 2},
        shadowRadius: 0,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    }
});

export default Card;