import Estylesheet from 'react-native-extended-stylesheet';


export default Estylesheet.create(
    {
        $font: '$primaryFont',
        container:
        {
            paddingLeft:10,
            paddingRight:10,
            paddingTop:20,
            paddingBottom:20,
            marginLeft:20,
            
            
        },
        text:
        {
            textAlign:'center',
            fontFamily:'$font',
            fontSize:12,
            color:'white',
            marginTop:5,
            marginBottom:5,
        },
        gradient:
        {
            height:130,
            position:'absolute',
            left:0,
            right:0,
            top:0, 
            borderRadius:20
        
        },
        icon:
        {
            
        },
    }
)