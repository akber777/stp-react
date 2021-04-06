import React, { Component } from "react";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

// // renderHtml
// import renderHtml from 'react-render-html';

// mapStyle
import mapStyle from "./mapStyle";

// map css
import "./css/_map.scss";

let currentZoom = 10;

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: "",
    zoomMap: currentZoom,
    selectedPlace: "",
    center: { lat: 40.409264, lng: 49.867092 },
    show: false,
    positions: "",
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        show: false,
      });
    }
  };

  componentDidMount() {
    this.setState({
      center: {
        lat: this.props.locations[0],
        lng: this.props.locations[1],
      },
    });
  }

  render() {
    const mapContainerStyle = {
      height: "409px",
      width: "100%",
    };

    // map style and checkking controls
    const mapOptions = {
      styles: mapStyle,
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: false,
    };

    // Clusters options

    // const optionsClusters = {
    //     styles: [{
    //         textColor: 'white',
    //         height: 53,
    //         url: require('../../images/clusters.svg'),
    //         'width': 50,
    //         'line-height': 42
    //     }]
    // }

    return (
      <div>
        <LoadScript googleMapsApiKey="AIzaSyANektuMKczEQdzMI82zHlFnMTVSmT55Vw">
          <GoogleMap
            id="mapWithClusters"
            mapContainerStyle={mapContainerStyle}
            zoom={this.state.zoomMap}
            center={this.state.center}
            options={mapOptions}
          >
            {/* <Marker>
              {this.props.locations !== false
                ? this.props.locations.map((item, index) => (
                    <Marker
                      key={index}
                      onClick={
                        (this.onMarkerClick = () => {
                          this.setState({
                            selectedPlace: item[0],
                            center: { lat: item[0], lng: item[1] },
                            showingInfoWindow: true,
                            positions: this.props.locations,
                            show: true,
                          });
                        })
                      }
                      icon={{
                        url: require("../../images/pin.png").default,
                        // size: { width: 30, height: 30, }
                      }}
                      position={{ lat: item[0], lng: item[1] }}
                      animation={2}
                    />
                  ))
                : ""}
            </Marker> */}
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default MapContainer;
