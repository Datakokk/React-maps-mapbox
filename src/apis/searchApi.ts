import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'en',
        access_token: 'pk.eyJ1IjoiZGF0YWtva2siLCJhIjoiY2xmOXhpa29oMHN0bjN0bzJlaWlsOG1ldiJ9.8zXIGNj38SWjiHtWn5WOWw'
    }
});

export default searchApi;