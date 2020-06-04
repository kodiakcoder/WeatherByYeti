import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import { LineChart,YAxis } from 'react-native-svg-charts'



const contentInset = { top: 20, bottom: 20 }

const Chart = ({data,height,ticks = 5}) =>{

    const styles= {
        height: height ? height: 200 ,
        flexDirection:'row'
    }





    return(
        <View style={styles}>

            <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={ticks}
                    formatLabel={(value) => `${value}ºC`}
            />
        <LineChart

                style={{ flex: 1, marginLeft: 16,marginTop:20}}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)',strokeWidth:3 }}
                //contentInset={{ top: 20, bottom: 20 }}
            >
            </LineChart>

        </View>
    )
}

export default Chart;