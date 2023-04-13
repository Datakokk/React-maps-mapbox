import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: true,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZGF0YWtva2siLCJhIjoiY2xmOXhpa29oMHN0bjN0bzJlaWlsOG1ldiJ9.8zXIGNj38SWjiHtWn5WOWw'
    }
});

export default directionsApi;