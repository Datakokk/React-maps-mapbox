import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: true,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1IjoiZGF0YWtva2siLCJhIjoiY205MDZ4OTU4MGtpdTJyc2R0dzNhMWU5bSJ9.uDPETX3L-_Gm4F6_vL83AA",
  },
});

export default directionsApi;
