import React from 'react';
import {View, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import styles from './styles';


const Icon = ({name, size, color}) =>
{
    



    return(
        <View style={styles.container}>
            
            <MaterialCommunityIcons 
                    name={name}
                    color={color}
                    size={size} 
                    iconStyle={styles.icon}
                    />
            
                    
            
        </View>
    )
}

export default Icon;