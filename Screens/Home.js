import React from 'react';
import {View, Text, SafeAreaView, Header} from 'react-native';
import Container from '../Components/Container/Container';
import Icon from '../Components/Icon/Icon';
import ForecastBar from '../Components/ForecastBar/ForecastBar';

const forecast = {
    Temperature: '37.5',
    City: 'Karachi',
    Country: 'Pakistan',
}



const Home = () => {



    return(
            
            <Container>
                <SafeAreaView>
                    <Text style={{fontFamily:'Avenir',fontSize:16,fontWeight:'600',textAlign:'center'}}>Weather Forecast</Text>
                    <View style={{marginVertical:15}}>
                    <Icon name="weather-sunny" size={80} color="orange"/>
                    </View>
                    <Text style={{fontFamily:'Avenir',fontSize:48,fontWeight:'700',textAlign:'center'}}>
                        {forecast.Temperature}°
                    </Text>
                    <Text style={{fontFamily:'Avenir',fontSize:18,textAlign:'center'}}>
                        {forecast.City}, {forecast.Country}
                    </Text>
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <ForecastBar firstColor="#ee7340" secondColor="#d55566" />
                        <ForecastBar firstColor="#A14B7F" secondColor="#66497F" />
                        <ForecastBar firstColor="#384369" secondColor="#233747" />
                    </View>
                </SafeAreaView>
            </Container>
           
        
    )
}

export default Home;