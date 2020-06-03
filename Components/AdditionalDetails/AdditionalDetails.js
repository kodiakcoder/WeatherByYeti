import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';

const AdditionalDetails = ({wind,humidity,visibility,uv}) =>{
    return(
        <View>
            <View style={styles.container_additional_info}>
                <View style={styles.container_info}>
                    <Text style={styles.additional_info_heading}>Wind</Text>
                    <Text style={styles.additional_info_data}>{wind} m/sec</Text>
                </View>
                <View style={styles.container_info}>
                    <Text style={styles.additional_info_heading}>Humidity</Text>
                    <Text style={styles.additional_info_data}>{humidity}%</Text>
                </View>
            </View>
            <View style={styles.container_additional_info}>
                <View style={styles.container_info}>
                    <Text style={styles.additional_info_heading}>Visiblity</Text>
                    <Text style={styles.additional_info_data}>{visibility} m</Text>
                </View>
                <View style={styles.container_info}>
                    <Text style={styles.additional_info_heading}>UV</Text>
                    <Text style={styles.additional_info_data}>{uv}</Text>
                </View>
            </View>
        </View>
    )
}

export default AdditionalDetails;