import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
//import {VenueLocationIcon} from './VenueLocationIcon';
import MarkerPopup2 from './MarkerPopup2';
import L from 'leaflet';

const VenueMarkers2 = (props) => {
  const { venues2 } = props;

  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const markers2 = venues2.map((venue2, index) => (
    <Marker key={index} position={venue2.geometry} icon={redIcon} >
      <MarkerPopup2 data={venue2}/>
    </Marker>
  ));

  return <Fragment>{markers2}</Fragment>
};

export default VenueMarkers2;
