'use client'
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Icon, LatLngTuple, LatLng, icon } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const geolocation_icon = new Icon ({
    iconUrl : 'https://img.icons8.com/fluency/96/100-percents.png',
    iconSize : [20,20], // size of the icon
})
function LocationMarker() {
    const [position, setPosition] = useState<LatLng>()
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })
  
    return position === null ? null : (
    <Marker icon={geolocation_icon} position={position || [0, 0]}>
        <Popup>You are here</Popup>
    </Marker>
    )
  }

export default function Map() {
    const pos : LatLngTuple = [-7.983908, 112.621391]

    
    return (
        <div>
            <MapContainer style={{
                height: '100vh',
                width: '100vw',
                zIndex: 0
            }} center={[-7.983908, 112.621391]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                const position: LatLngTuple = [-7.983908, 112.621391];
                <Marker position={pos}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>

			<Marker icon={geolocation_icon} position={[-8, 112.621391]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
            <LocationMarker />
            </MapContainer>
        </div>
    )
}
