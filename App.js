import React,{useState,useEffect} from 'react';
import {View, Text, Platform} from 'react-native';
import Home from './Screens/Home';
import WeeklyForecast from './Screens/WeeklyForecast';
import EStylesheet from 'react-native-extended-stylesheet';

import Navigation from './config/navigation';
import {GlobalStateProvider} from './Context/GlobalState';
EStylesheet.build(
  {
    $primaryFont: Platform.OS == 'ios'? 'Avenir':'Roboto',
  }
)



const App = () =>{


  return(
    <GlobalStateProvider>
      <Navigation/>
    </GlobalStateProvider>

  )
}

export default App;