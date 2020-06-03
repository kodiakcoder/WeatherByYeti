import React from 'react';


const weatherContext = React.createContext(
    {
        weather:{
            city:'karachi',
            temperature:30.6,
            humidity:60
        },
        loading:true
    }
)

export default weatherContext;