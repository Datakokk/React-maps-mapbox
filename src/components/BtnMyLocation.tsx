import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {

  const {isMapReady, map } = useContext(MapContext)
  const { userLocation } = useContext(PlacesContext)
  
  const onClick = () => {
    if( !isMapReady ) throw new Error('The map is not ready');
    if( !userLocation ) throw new Error('No user location');

    map?.flyTo({
      zoom: 14,
      center: userLocation
    })
  }
    
  return (
    <button
        className="btn btn-primary"
        onClick={ onClick }
        style={{
            backgroundColor: '#61DAFB',
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 2
        }}
    >
        My position
    </button>
  )
}
