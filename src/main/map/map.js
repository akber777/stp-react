import React, {Component} from "react";

import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

// // renderHtml
// import renderHtml from 'react-render-html';

// mapStyle
import mapStyle from "./mapStyle";

// map css
import "./css/_map.scss";

//proptypes
import PropTypes from 'prop-types';

let currentZoom = 10;

class MapContainer extends Component {


    state = {
        showingInfoWindow: false,
        activeMarker: "",
        zoomMap: currentZoom,
        selectedPlace: "",
        center: {lat: 40.409264, lng: 49.867092},
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


    _mapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyle
        })
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

        const defaultMapOptions = {
            scaleControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            panControl: false,
            rotateControl: false,
            fullscreenControl: false,
            zoomControl: false,
        };


        return (
            <div id="mapWithClusters">
                <Map
                    google={this.props.google}
                    zoom={this.state.zoomMap}
                    initialCenter={this.state.center}
                    disableDefaultUI={true}
                    defaultOptions={{
                        styles: this.props
                    }}


                >
                    <Marker
                        position={this.state.center}
                    />
                </Map>
            </div>
        );
    }
}


MapContainer.defaultProps = mapStyle

export default GoogleApiWrapper({
    apiKey: 'AIzaSyANektuMKczEQdzMI82zHlFnMTVSmT55Vw'
})(MapContainer);
;
