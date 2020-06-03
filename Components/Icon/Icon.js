import React from 'react';
import {View, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import styles from './styles';


const Icon = ({name, size, color,alignment}) =>
{
    let containerStyles = styles.container

    if(alignment)
    {
        containerStyles.alignSelf = 'auto'
    }

    return(
        <View style={containerStyles}>

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