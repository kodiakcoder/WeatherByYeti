import React from 'react';
import {Text,View ,TouchableHighlight} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';


const NavBar = ({navigation}) =>{

    return(
        <View style={{flex:1,justifyContent:'flex-end'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>

                                <TouchableHighlight onPress={()=>alert('home')}>
                                    <Text ><AntDesign name="retweet" size={22} color="black" /> Refresh</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TouchableHighlight onPress={() => navigation.push("WeeklyForecast")}>
                                    <AntDesign name="calendar" size={24} color="black" style={{marginRight:20}}/>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={()=>navigation.push('Settings')}>
                                    <AntDesign name="setting" size={24} color="black" />
                                </TouchableHighlight>
                            </View>
                        </View>
        </View>
    )
}

export default NavBar;