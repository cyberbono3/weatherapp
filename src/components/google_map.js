import React, {Component} from 'react';


class GoogleMap extends Component {
//executed aftomatically after this component has been rendered

componentDidMount() {
 new google.maps.Map(this.refs.map, {
   zoom: 12,
   center: {
      lat: this.props.lat,
      lng: this.props.lon
      }
   });

}


render() {

    // i can get a reference to this component by htmkl element this.refs.map'
 return <div ref="map" /> ;
    


}

}


export default GoogleMap;
