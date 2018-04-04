  //https://home.openweathermap.org/api_keys
 //APIkey d0137ca989bba8d2359158715846b1c6

 import axios from 'axios';

const API_KEY='d0137ca989bba8d2359158715846b1c6';


const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;




//make const text variblae to avoid using text in type
// to keep data type consistent with between action creators and reducers

export const FETCH_WEATHER = 'FETCH_WEATHER';


//http://samples.openweathermap.org/data/2.5/forecast
//?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22



//axioscreator to make api request
//working almost identically as jquery


//we use axios for solid AJAX request for the browser

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request: ', request);

  return{
      type: FETCH_WEATHER,
      payload: request
   }

}


