import React, {useRef, useState} from 'react';
import {MapContainer,TileLayer} from 'react-leaflet'
import OsmProvider from "./OsmProvider";
import 'leaflet/dist/leaflet.css'
const MapComponent = ({className}) => {
    const [center,setCenter] = useState({
        lat: -1.23435,
        lng: 36.97495
    });
    const ZOOM_LEVEl = 13;
    const mapRef = useRef();
    return (
        <div className={"col-auto"}>
            <MapContainer center={center} zoom={ZOOM_LEVEl} ref={mapRef} className={className}>
                <TileLayer url={OsmProvider.maptiler.url} attribution={OsmProvider.maptiler.attribution}/>
            </MapContainer>
        </div>
    );
}

export default MapComponent;