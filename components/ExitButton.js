import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

const ExitButton = props =>{
    return (
        <HeaderButton 
            {...props}
            IconComponent={AntDesign}
            iconSize={23}
            color={'#F5F5DC'}
        />
    )
}

export default ExitButton;