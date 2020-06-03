import React from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import Container from '../Components/Container/Container';
import AdditionalDetails from '../Components/AdditionalDetails/AdditionalDetails'
import Icon from '../Components/Icon/Icon';
import ForecastIcon from '../Components/ForecastIcon/ForecastIcon';
import NavBar from '../Components/NavBar/NavBar';
import Chart from '../Components/Chart/Chart'


const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

const weeklydata = [
    {
        day:'M',
        weather:'rainy'
    },
    {
        day:'T',
        weather:'rainy'
    },
    {
        day:'W',
        weather:'sunny'
    },
    {
        day:'T',
        weather:'cloudy'
    },
    {
        day:'F',
        weather:'sunny'
    }
]


const WeeklyForecast = () => {

    return(
        <Container>
            <SafeAreaView>
                <View style={{paddingTop:50}}>
                    <Text style={{fontSize:18,fontWeight:'800'}}>Weekly Forecast</Text>
                </View>
                <View style={{paddingTop:50,flexDirection:"row",justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <Icon name="weather-pouring" size={24}/>
                        <Text style={{fontSize:18}}> Friday</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:18}}>31.9</Text>
                    </View>
                </View>

                <View style={{paddingTop:30}}>
                    <AdditionalDetails wind="14" humidity="55" visibility="25" uv="1"/>
                </View>

                <View style={{paddingTop:50}}>
                    <Chart data={data} height={300}/>
                </View>
                <View style={{flex:3,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                    {
                    weeklydata.map(data => <ForecastIcon day={data.day} forecast={data.weather}/>)
                    }

                </View>
            </SafeAreaView>
        </Container>
    )
}

export default WeeklyForecast;