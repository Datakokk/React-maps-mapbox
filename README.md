# Maps app 

    npx-create-react-app name-app --template typescript

    yarn-create-react-app name-app --template typescript

## Bootstrap

    https://getbootstrap.com/docs/5.3/getting-started/introduction/#cdn-links

    We use the cdn:

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" />


## Mapbox

    https://www.mapbox.com/

    https://docs.mapbox.com/mapbox-gl-js/guides/install/


    npm install --save mapbox-gl

    For to use this we have to posibilityes: (The documentation explains more about it.)

        1.- <link href='https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css' rel='stylesheet' />

        2.- import 'mapbox-gl/dist/mapbox-gl.css';

    In the index.tsx file add this code:

        import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGF0YWtva2siLCJhIjoiY2xmNTJmYjJuMThkczN2cjByczVwNjNlZSJ9.NS1f4sOkpVdi-XZ-cGKTHA'; // token from mapbox

    then run this code in the console because we have a problem with import

        npm i --save-dev @types/mapbox-gl

## Import Axios

    npm i axios

## Convert JSON into gorgeous, typesafe code in any language.

    https://app.quicktype.io/

## Deploy Netlify

    https://www.netlify.com/
# React-maps-mapbox
