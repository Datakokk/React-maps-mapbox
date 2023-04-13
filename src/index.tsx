/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF0YWtva2siLCJhIjoiY2xmOXhpa29oMHN0bjN0bzJlaWlsOG1ldiJ9.8zXIGNj38SWjiHtWn5WOWw';

if( !navigator.geolocation ){
  alert('your browser does not have a geolocation option');
  throw new Error('your browser does not have a geolocation option')
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

