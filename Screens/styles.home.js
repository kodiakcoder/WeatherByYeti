import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create(
    {
        $textFont: '$primaryFont',
        text_heading:
        {
            fontFamily:'Avenir',
            fontSize:16,
            fontWeight:'800',
            textAlign:'center'
        },
        container_icon:
        {
            marginVertical:15,
        },
        text_temperature:
        {
            fontFamily:'Avenir',
            fontSize:48,
            fontWeight:'700',
            textAlign:'center',
        },
        text_location:
        {
            fontFamily:'Avenir',
            fontSize:18,
            textAlign:'center'
        },
        container_hourly:
        {
            flexDirection:'row',
            marginTop:20
        }
        

    }
)
