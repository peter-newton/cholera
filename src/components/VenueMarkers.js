import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {VenueLocationIcon2} from './VenueLocationIcon2';
import MarkerPopup from './MarkerPopup';

const VenueMarkers = (props) => {
  const { venues } = props;

  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={VenueLocationIcon2} >
      <MarkerPopup data={venue}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default VenueMarkers;
