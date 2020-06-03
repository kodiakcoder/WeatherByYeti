import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../Screens/Home';
import WeeklyForecast from '../Screens/WeeklyForecast';
import Settings from '../Screens/Settings';

const Stack = createStackNavigator();

const Navigation = () =>(
    <Stack.Navigator >
        <Stack.Screen name="Home" component={Home}  options={{headerTitle:'Home',headerShown:false}} />
        <Stack.Screen name="WeeklyForecast" component={WeeklyForecast} options={{headerTitle:'Weekly Forecast'}}/>
        <Stack.Screen name="Settings"  component={Settings} />
    </Stack.Navigator>
)


export default () =>(
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
)