import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../Icon/Icon';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';



const ForeCastBar = ({firstColor,secondColor,icon}) =>
{



    return(
        <View style={styles.container}>
            <LinearGradient 
                colors={[firstColor,secondColor]}
                style={styles.gradient}
                start={[0,0.5]}
                locations={[0,0.5]}

            />
            <Text style={styles.text}>
                Time
            </Text>
            <View style={{marginTop:10}}>
            <Icon name="weather-pouring" color="white" size={32}/>
            </View>
            <Text style={styles.text}>
                Temperature
            </Text>
        </View>
    )
}

export default ForeCastBar;