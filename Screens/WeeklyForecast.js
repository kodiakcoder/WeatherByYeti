import React,{useContext} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import Container from '../Components/Container/Container';
import AdditionalDetails from '../Components/AdditionalDetails/AdditionalDetails'
import Icon from '../Components/Icon/Icon';
import ForecastIcon from '../Components/ForecastIcon/ForecastIcon';
import Chart from '../Components/Chart/Chart'

import {GlobalState} from '../Context/GlobalState';
import {convertTimestampDate,getCurrentDay,getWeeklyChartData,makeIconData} from '../Helpers/helper';

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

    const {weather} = useContext(GlobalState)
    console.log(weather)
    const {daily: dailyWeather} = weather
    //const {current} = weather
    console.log('daily: ',dailyWeather)
    //console.log('Chart data weekly; ', getWeeklyChartData(dailyWeather))
    console.log("weeklyeate: ",makeIconData(dailyWeather))
    return(
        <Container>
            <SafeAreaView>
                <View style={{paddingTop:50}}>
                    <Text style={{fontSize:18,fontWeight:'800'}}>Weekly Forecast</Text>
                </View>
                <View style={{paddingTop:50,flexDirection:"row",justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <Icon name="weather-pouring" size={24}/>
                        <Text style={{fontSize:18}}>{getCurrentDay()}</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:18}}>{Math.floor(weather.current.temp - 273.15)}</Text>
                    </View>
                </View>

                <View style={{paddingTop:30}}>
                    <AdditionalDetails wind={weather.current.wind_speed}
                        humidity={weather.current.humidity}
                        visibility={weather.current.visibility}
                        uv={weather.current.uvi}
                    />
                </View>

                <View style={{paddingTop:50}}>
                    <Chart data={getWeeklyChartData(dailyWeather)} height={250} ticks={8}/>
                </View>

                <View style={{flex:3,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                    {
                        makeIconData(dailyWeather).map(data => <ForecastIcon key={data.id} day={data.day} forecast={data.weather}/>)
                        //weeklydata.map(data => <ForecastIcon day={data.day} forecast={data.weather}/>)
                    }

                </View>
            </SafeAreaView>
        </Container>
    )
}

export default WeeklyForecast;