import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from 'react-leaflet';
import OsmProvider from "./OsmProvider";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import {GeoSearchControl, OpenStreetMapProvider} from "leaflet-geosearch";


const MapClickHandler = ({ onClick }) => {
    useMapEvents({
        click(event) {
            onClick(event);
        },
    });
    return null;
};
const LeafletGeoSearch = () => {
    const map = useMap();

    useEffect(() => {
        const provider = new OpenStreetMapProvider();

        const searchControl = new GeoSearchControl({
            provider: provider,
            autoComplete: true,
            autoClose: true,
            zoom:14,
            marker: {
                icon: new L.Icon({
                    iconUrl: 'https://ik.imagekit.io/3paggvhlz/map-marker-icon-vector-12860544-removebg-preview.png?updatedAt=1709322774090',
                    iconSize: [40, 40],
                })
            }
        });

        map.addControl(searchControl);

        return () => map.removeControl(searchControl);
    }, [map]);

    return null;
};

const MapComponent = ({ width,height,onMapClick }) => {
    const [position, setPosition] = useState();

    const handleMapClick = (event) => {
        const { latlng } = event;
        setPosition(latlng);
        onMapClick(latlng.lat,latlng.lng)
    };

    const icon = L.icon({
        iconUrl: 'https://ik.imagekit.io/3paggvhlz/map-marker-icon-vector-12860544-removebg-preview.png?updatedAt=1709322774090',
        iconSize: [40, 40],
    });

    return (
        <div className={"col-auto"} id={"map"}>
            <MapContainer center={[-1.23435,36.97495]} zoom={12} style={{width,height}} className={"rounded-xl"}>
                <TileLayer url={OsmProvider.maptiler.url} attribution={OsmProvider.maptiler.attribution} />
                <MapClickHandler onClick={handleMapClick} />
                {position  && (
                    <Marker position={position} icon={icon}>
                        <Popup>
                            Latitude: {position.lat}<br />
                            Longitude: {position.lng}
                        </Popup>
                    </Marker>
                )}
                <LeafletGeoSearch/>
            </MapContainer>
        </div>
    );
}

export default MapComponent;
