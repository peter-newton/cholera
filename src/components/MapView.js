import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import data2 from '../assets/data2';
import data3 from '../assets/data3';
import Markers from './VenueMarkers';
import Markers2 from './VenueMarkers2';
import Markers3 from './VenueMarkers3';


class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 51.51330, lng: -0.13582 },
      zoom: 17,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
        <container>
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Markers venues={data.venues}/>
        <Markers2 venues={data2.pumps}/>
        <Markers3 venues={data3.deaths}/>
      </Map>

          <iframe title="Men vs. Women" width="600" height="500" frameBorder="0" scrolling="no"
                  src="//plotly.com/~pnewton/17.embed"></iframe>

          <iframe title="Male Fatalities/Bar" width="700" height="500" frameBorder="0" scrolling="no"
                  src="//plotly.com/~pnewton/13.embed"></iframe>

          <iframe title="Female Fatalities" width="700" height="500" frameBorder="0" scrolling="no"
                  src="//plotly.com/~pnewton/14.embed"></iframe>

          <iframe title="Female Fatalities Pie" width="600" height="500" frameBorder="0" scrolling="no"
                  src="//plotly.com/~pnewton/12.embed"></iframe>

          <iframe title="Male Fatalities/Pie" width="600" height="500" frameBorder="0" scrolling="no"
                  src="//plotly.com/~pnewton/10.embed"></iframe>

          <iframe title="Men/Female Table" width="600" height="500" frameBorder="0" scrolling="no"
                  src="//plotly.com/~pnewton/9.embed"></iframe>

          <iframe title="Naples Age & Sex Bar" width="600" height="500" frameBorder="0" scrolling="no"
                  src="//plotly.com/~pnewton/8.embed"></iframe>

          <iframe title="Age & Sex Table" width="600" height="500" frameBorder="0" scrolling="no"
                  src="//plotly.com/~pnewton/7.embed"></iframe>

          <iframe title="Attacks and Deaths Line" width="1500" height="500" frameBorder="0" scrolling="no"
                  src="//plotly.com/~pnewton/6.embed"></iframe>



        </container>
    );
  }
}
export default MapView;
