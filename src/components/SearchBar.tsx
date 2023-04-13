import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../context";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {

    const { searchPlacesByTerm } = useContext(PlacesContext)

    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChanged = ( event: ChangeEvent<HTMLInputElement> ) => {

        if( debounceRef.current ){
            clearTimeout( debounceRef.current );
        }

        debounceRef.current = setTimeout( () => {
            // todo run query
            //console.log('debounced value', event.target.value )
            searchPlacesByTerm(event.target.value);
        }, 360);
    }
  return (
    <div className="search-container"
        style={{
            width: '240px'
        }}
    >
        <input 
            type="text"
            className="form-control"
            placeholder="Search ......"
            onChange={ onQueryChanged }
        />

        <SearchResults />
    </div>
  )
}
