# 🗺️ React Maps App with Mapbox

A React + TypeScript application using Mapbox for map integration, Bootstrap for styling, Axios for HTTP requests, and Netlify for deployment.

---

## 🚀 Create App with TypeScript

    npx create-react-app my-maps-app --template typescript

    yarn create react-app my-maps-app --template typescript

---

## 🎨 Bootstrap

    https://getbootstrap.com/docs/5.3/getting-started/introduction/#cdn-links

We use the CDN. Add the following line inside the `<head>` tag in `public/index.html`:

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />

---

## 🗺️ Mapbox

    https://www.mapbox.com/

    https://docs.mapbox.com/mapbox-gl-js/guides/install/

Install Mapbox GL JS:

    npm install --save mapbox-gl

To include the Mapbox CSS, you have two options:

    1. <link href='https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.css' rel='stylesheet' />
    2. import 'mapbox-gl/dist/mapbox-gl.css';

In your `index.tsx` (or entry file), add the following code:

    import mapboxgl from 'mapbox-gl'; // or const mapboxgl = require('mapbox-gl');

    mapboxgl.accessToken = 'pk.eyJ1IjoiZGF0YWtva2siLCJhIjoiY2xmNTJmYjJuMThkczN2cjByczVwNjNlZSJ9.NS1f4sOkpVdi-XZ-cGKTHA';

Install the types for Mapbox to avoid TypeScript errors:

    npm install --save-dev @types/mapbox-gl

---

## 🔗 Axios

Install Axios for making HTTP requests:

    npm install axios

---

## 📦 JSON to TypeScript

Use this tool to convert JSON into typesafe TypeScript interfaces:

    https://app.quicktype.io/

---

## 🚀 Deploy with Netlify

You can deploy your app using:

    https://www.netlify.com/

---

## 📁 Project Repository

React-maps-mapbox - 1
https://github.com/Datakokk/React-maps-mapbox
