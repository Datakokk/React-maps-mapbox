/* eslint import/no-webpack-loader-syntax: off */

//@ts-ignore
import { Map } from "!mapbox-gl";
import { createContext } from "react";

export interface MapContextProps {
    isMapReady: boolean,
    map?: Map

    // Method
    setMap: (map: Map) => void,
    getRouteBetweenPoints: (start: [number, number], end: [number, number]) => void
}

export const MapContext = createContext({} as MapContextProps );

