import EStyleSheet from 'react-native-extended-stylesheet';


export default EStyleSheet.create(
    {
        $textFont: '$primaryFont',
        container_additional_info:
        {
            flexDirection:'row',
            marginTop:25,

        },
        container_info:
        {
            flexDirection:'row',
            marginHorizontal:30,
        },
        additional_info_heading:
        {
            fontFamily:'$textFont',
            fontSize:14,
            fontWeight:'800',
            paddingRight:20
        },
        additional_info_data:
        {
            fontFamily:'$textFont',
            fontSize:14,
            fontWeight:'600',
            //textAlign:'right'
        },
    }
)