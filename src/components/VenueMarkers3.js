import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {VenueLocationIcon3} from './VenueLocationIcon3';
import MarkerPopup3 from './MarkerPopup3';

const VenueMarkers3 = (props) => {
  const { venues } = props;

  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={VenueLocationIcon3} >
      <MarkerPopup3 data={venue}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default VenueMarkers3;
