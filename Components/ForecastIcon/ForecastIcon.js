import React from 'react';
import {View,Text} from 'react-native';
import Icon from '../Icon/Icon'
import styles from './styles';

const ForecastIcon = ({day,forecast}) =>{
    let weather = ""

    switch (forecast) {
        case "rainy":
            weather = 'weather-rainy'
            break;
        case "cloudy":
            weather = 'weather-cloudy'
            break;
        default:
            weather = 'weather-sunny'
            break;
    }




    return(
        <View style={{flexDirection:'column'}}>
            <Icon name={weather} size={34}/>
            <Text style={{textAlign:'center',fontSize:18}}>{day}</Text>
        </View>
    )
}

export default ForecastIcon;