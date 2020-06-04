import React,{createContext,useState,useReducer,useEffect} from 'react';
import axios from 'axios';


const initialState = {
    weather:{
        city:'karachi',
        temp:35.6,
    },
    loading:true
}
const GlobalState = createContext()
const {Provider} = GlobalState

const GlobalStateProvider = ({children}) =>{


    /*
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
          case 'action description':
            const newState = state // do something with the action
            return newState;
          default:
            throw new Error();
        };
      }, initialState);
      */


    const [weather,setWeather] = useState(initialState)
    const [loading,setLoading] = useState(true)

    const lat = 24.8607
    const lon = 67.0011
    const baseURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=e8db30049b2b135bc252c44a8ee88dd7`


    useEffect(() => {
        async function getData(){
            await axios.get(baseURL)
            .then(response => {
                setWeather(response.data)
                setLoading(false)
                //console.log('Setting data for home')
            }
            )
            .catch(err=> console.log(err))
        }

        getData()
      }, []);



      return <Provider value={{ weather, loading }}>{children}</Provider>;
    };

    export { GlobalState, GlobalStateProvider }