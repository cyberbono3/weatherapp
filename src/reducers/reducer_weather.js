
//import { FETCH_WEATHER } from '../actions/index';

export default function(state =[], action) {
    
  
  console.log("action", action);
  console.log("payload: ", action.payload);
  //console.log("FETCHWEATHER: ", FETCH_WEATHER);


  switch (action.type) {
     case 'FETCH_WEATHER':
        console.log("data: ", action.payload.data);
        return state.concat([action.payload.data]); // [city,city, city]  not [city], [city,city,city]
   }
    return state;
  
    
}