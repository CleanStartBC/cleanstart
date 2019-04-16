import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class GoogleMapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {}
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const { location } = this.props;
    const { name } = this.props;
    const { address } = this.props;
    const mapStyle = {
      width: '100%',
      height: '220px',
      position: 'relative',
    }
    const lat = location.latitude;
    const lon = location.longitude;
    return(

      <Map
        item
        xs = { 12 }
        style = { mapStyle }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: lat, lng: lon }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { name }
          position = {{ lat: lat, lng: lon }}
          name = { name }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <div>
            <strong>{name}</strong>

            <p>{address}</p>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD1bZH-qvcd5oiLv7F612YH-jHgzEMLCeA'),
})(GoogleMapContainer)
