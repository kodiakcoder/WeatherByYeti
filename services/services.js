import axios from 'axios';





const getWeather = async () =>{
    const lat =24.8607
    const lon = 67.0011
    const baseURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=e8db30049b2b135bc252c44a8ee88dd7`

    console.log('Baseurl: ', baseURL)
    const fetchedData = await axios.get(baseURL).then(res => res.data).catch(err => console.log(err))
    console.log(fetchedData)
    return fetchedData
}





export default {
    getWeather
}