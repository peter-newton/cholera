import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 51.51342, lng: -0.13642 },
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
      </Map>
          
          <iframe width="600" height="500" frameBorder="0" scrolling="no" src="//plotly.com/~pnewton/17.embed"></iframe>

          <iframe width="600" height="500" frameBorder="0" scrolling="no" src="//plotly.com/~pnewton/9.embed"></iframe>

          <iframe width="600" height="500" frameBorder="0" scrolling="no" src="//plotly.com/~pnewton/13.embed"></iframe>

        </container>
    );
  }
}
export default MapView;
