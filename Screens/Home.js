import React,{useState,useEffect,useContext} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import Container from '../Components/Container/Container';
import Icon from '../Components/Icon/Icon';
import ForecastBar from '../Components/ForecastBar/ForecastBar';
import AdditionalData from '../Components/AdditionalDetails/AdditionalDetails';
import Chart from '../Components/Chart/Chart';
import NavBar from '../Components/NavBar/NavBar';
import styles from './styles.home';

import {GlobalState} from '../Context/GlobalState';
import {convertTimestampTime,getChartData} from '../Helpers/helper';


const dataChart = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

const forecast = {
    Temperature: '37.5',
    City: 'Karachi',
    Country: 'PK',
}



const Home = ({navigation}) => {

    const {loading,weather:data} = useContext(GlobalState)
    console.log('loading: ', loading)
    //console.log('Global state is: ',globalstate)
    const {hourly} = data
    console.log('hourly: ',hourly )
    //const [data,setData] = useState(weather)
    //const [isloading,setLoading] = useState(loading)


    /*
    const lat = 24.8607
    const lon = 67.0011
    const baseURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=e8db30049b2b135bc252c44a8ee88dd7`




    useEffect(() => {
        async function getData(){
            await axios.get(baseURL)
            .then(response => {
                setData(response.data)
                setLoading(false)
                console.log('Setting data for home')
            }
            )
            .catch(err=> console.log(err))
        }

        getData()
      }, []);
      */


    //console.log(getChartData(hourly))
    //const chartData = getChartData(hourly)

    if(!loading){
    return(

            <Container>
                <SafeAreaView>
                    <View style={styles.container_top_half}>
                        <Text style={styles.text_heading}>Weather Forecast</Text>
                        <View style={styles.container_icon}>
                            <Icon name="weather-sunny" size={80} color="orange"/>
                        </View>
                        <Text style={styles.text_temperature}>
                            {Math.floor(data.current.temp - 273.15)}°

                        </Text>
                        <Text style={styles.text_location}>
                            {forecast.City}, {forecast.Country}
                        </Text>
                        <View style={styles.container_hourly}>
                            <ForecastBar

                            time={convertTimestampTime(data.hourly[1].dt)}
                            temp={data.hourly[1].temp- 273.15}
                            icon={data.hourly[1].weather[0].main}
                            firstColor="#ee7340" secondColor="#d55566" />
                            <ForecastBar
                            time={convertTimestampTime(data.hourly[2].dt)}
                            temp={data.hourly[2].temp- 273.15}
                            icon={data.hourly[2].weather[0].main}
                            firstColor="#A14B7F" secondColor="#66497F" />
                            <ForecastBar
                            time={convertTimestampTime(data.hourly[3].dt)}
                            temp={data.hourly[3].temp- 273.15}
                            icon={data.hourly[3].weather[0].main}
                            firstColor="#384369" secondColor="#233747" />
                        </View>
                    </View>
                    <View style={styles.container_bottom_half}>
                        <Text style={styles.secondary_heading}>Additional Information</Text>
                        <AdditionalData
                        wind={data.current.wind_speed}
                        humidity={data.current.humidity}
                        visibility={data.current.visibility}
                        uv={data.current.uvi}/>
                    </View>

                    <View>
                        {hourly && <Chart data={getChartData(hourly)}/>}
                    </View>
                    <NavBar navigation={navigation}/>



                </SafeAreaView>
            </Container>


    )
    }
    else{
         return <ActivityIndicator />
    }
}

export default Home;