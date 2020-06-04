import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../Icon/Icon';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';



const ForeCastBar = ({time,temp,firstColor,secondColor,icon}) =>
{
    let iconType = ''

    switch (icon) {
        case 'Rain':
            iconType = 'weather-rainy'
            break;
        case 'Clouds':
            iconType ='weather-cloudy'
            break;
        default:
            iconType='weather-sunny'
            break;
    }


    return(
        <View style={styles.container}>
            <LinearGradient
                colors={[firstColor,secondColor]}
                style={styles.gradient}
                start={[0,0.5]}
                locations={[0,0.5]}

            />
            <Text style={styles.text}>
                {time}
            </Text>
            <View style={{marginTop:10}}>
            <Icon name={iconType} color="white" size={32}/>
            </View>
            <Text style={styles.text}>
                {Math.floor(temp)}°
            </Text>
        </View>
    )
}

export default ForeCastBar;