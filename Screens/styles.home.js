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
        secondary_heading:{
            fontFamily:'Avenir',
            fontSize:16,
            fontWeight:'800',
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
            justifyContent:'center',
            marginTop:20
        },
        container_top_half:
        {
            //backgroundColor: 'pink',
            paddingTop:20
            //width:'100%',
        },
        container_bottom_half:
        {
            //backgroundColor:'grey',
            paddingTop:35
        },





    }
)
