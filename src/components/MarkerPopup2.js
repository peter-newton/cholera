import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup2 = (props) => {
  const { name } = props.data2;
  console.log(name);

  return  (<Popup>
    <div className='poup-text'>{name}</div>
  </Popup>);
};

export default MarkerPopup2;
