import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {VenueLocationIcon3} from './VenueLocationIcon3';
import MarkerPopup2 from './MarkerPopup2';

const VenueMarkers2 = (props) => {
  const { venues } = props;

  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={VenueLocationIcon3} >
      <MarkerPopup2 data={venue}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default VenueMarkers2;
