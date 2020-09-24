import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {VenueLocationIcon4} from './VenueLocationIcon4';
import MarkerPopup4 from './MarkerPopup3';

const VenueMarkers4 = (props) => {
  const { venues } = props;

  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={VenueLocationIcon4} >
      <MarkerPopup4 data={venue}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default VenueMarkers4;
