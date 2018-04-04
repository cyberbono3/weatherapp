import React, {Component} from 'react';
import  {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';




class WeatherList extends Component {
  
   renderWeather(data) {
      

       const temps = data.list.map(weather => weather.main.temp)
       const pres = data.list.map(weather => weather.main.pressure)
       const hum = data.list.map(weather => weather.main.humidity)
       const {lon, lat} = data.city.coord;
      




        return(
         <tr key={data.city.name}>
          <td><GoogleMap lon={lon} lat={lat} /></td>
          <td><Chart val ={temps} color="blue"  units="K"/></td>
          <td><Chart val ={pres}  color="grey" units="hPa" /></td>
          <td><Chart val ={hum}  color="orange" units="%" /></td>
          </tr>
        
          );
        


   }




    render() {
    //   if (!this.props.city) {
    //       return <div> Please enter the city </div>;
    //       }

   

    return (
        <table className ="table table-hover">
         <thead>
           <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa) </th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
         <tbody>
               {this.props.weather.map(this.renderWeather)}
        </tbody>
         </table>
          );
     }

}

// function mapStateToProps (state)
//    { 
//     return {weather:state.weather}
//                                 }


//const weather = state.weather  
//{weather:weather  }
 function mapStateToProps({weather}) {
   return {weather}  ;  ////{weather:weather}
 }
    
 
    
export default connect(mapStateToProps)(WeatherList);

