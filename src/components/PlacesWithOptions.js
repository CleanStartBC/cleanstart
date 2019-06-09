import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';

/*global google*/

const serviceBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(48,-124),
  new google.maps.LatLng(50,-121),
)

const searchOptions = {
  bounds: serviceBounds,
  strictBounds: true,
  componentRestrictions: { country: 'ca' }
}

const PlacesWithOptions = ({ address, handleAddress }) => {
  return(
    <PlacesAutocomplete
      value={address}
      onChange={handleAddress}
      searchOptions={searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Address',
              className: 'location-search-input form-control rounded-0',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';

              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  )
}

export default PlacesWithOptions
