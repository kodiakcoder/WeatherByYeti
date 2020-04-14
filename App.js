import React from 'react';
import {View, Text, Platform} from 'react-native';
import Home from './Screens/Home';
import EStylesheet from 'react-native-extended-stylesheet';



EStylesheet.build(
  {
    $primaryFont: Platform.OS == 'ios'? 'Avenir':'Roboto',
  }
)


const App = () =>{

  const currTemp = 37.5

  return(
    <Home />
  )
}

export default App;