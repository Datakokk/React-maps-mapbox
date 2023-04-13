import { MapProvider, PlacesProvider } from "./context"
import { HomeScreen } from "./screens/HomeScreen"

import './styles.css';

export const MapsApp = () => {
  return (
    <PlacesProvider>
        <MapProvider>
          <HomeScreen />
        </MapProvider>
    </PlacesProvider>
  )
}
