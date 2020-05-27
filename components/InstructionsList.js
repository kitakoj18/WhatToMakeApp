import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Instruction from './Instruction';

const InstructionsList = props =>{

    const renderSteps = (result) =>{
        let step = result.item.step;
        // some parts of instructions don't have space after period 
        step = step.replace(/[.]+(?=[^\s])/g, ". ");
        // console.log(step);
        return(
            <Instruction 
                step={step}
            />
        )
    }
    
    return (
        <FlatList
            keyExtractor={step=>step.number.toString()}
            data={props.recipeSteps}
            renderItem={renderSteps}
        />
    )
;}

export default InstructionsList