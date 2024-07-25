import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Search from '../../../Component/Landing/Banner/search';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '../../../../src/Map.css';

const markersData = [
    { id: '1', position: [-6.595038, 106.816635], popupText: 'Perangkat 1', details: 'Details about Marker 1', history: 'History of Marker 1' },
    { id: '2', position: [-5.429424, 105.262844], popupText: 'Perangkat 2', details: 'Details about Marker 2', history: 'History of Marker 2' },
    { id: '3', position: [-6.914744, 107.609810], popupText: 'Perangkat 3', details: 'Details about Marker 3', history: 'History of Marker 3' },
    { id: '4', position: [-6.993379, 110.421606], popupText: 'Perangkat 4', details: 'Details about Marker 4', history: 'History of Marker 4' },
];

const Banner = () => {
    const [markers] = useState(markersData);
    const [activeMarker, setActiveMarker] = useState(null);
    const mapRef = useRef();
    const navigate = useNavigate();

    const handleSearch = (searchTerm) => {
        console.log('Searching for:', searchTerm);
        const marker = markers.find((m) => m.id === searchTerm);
        if (marker) {
            console.log('Found marker:', marker);
            if (mapRef.current) {
                mapRef.current.setView(marker.position, 13);
                setActiveMarker(marker);
            }
        } else {
            console.log('Titik Lokasi Tidak Ditemukan');
        }
    };

    const handleMarkerClick = (marker) => {
        setActiveMarker(marker);
    };

    const handleDetailClick = () => {
        if (activeMarker) {
            navigate(`/detail-perangkat/${activeMarker.id}`);
        }
    };

    const handleHistoryClick = () => {
        if (activeMarker) {
            navigate(`/history-perangkat/${activeMarker.id}`);
        }
    };

    return (
        <div className="relative flex justify-center items-center w-full">
            <div className="absolute top-4 left-4 z-50 mt-2 ml-[6%] transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <Search onSearch={handleSearch} />
            </div>
            <div className="w-[1190px] h-[530px] bg-white border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center mt-4 relative z-10 font-semibold">
                <MapContainer center={[-6.595038, 106.816635]} zoom={6} style={{ height: '80%', width: '90%', borderRadius: '8px', marginTop: '50px' }} 
                    whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}>

                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

                    {markers.map((marker) => (
                        <Marker key={marker.id} position={marker.position} eventHandlers={{ click: () => handleMarkerClick(marker) }}>
                            <Popup>
                                {marker.popupText}
                                <div className="mt-2 flex gap-2">
                                    <button onClick={handleDetailClick} 
                                        className="bg-blue-500 text-white px-2 py-1 rounded transition-colors duration-300 ease-in-out hover:bg-blue-600"
                                    >Detail</button>
                                    <button onClick={handleHistoryClick} 
                                        className="bg-green-500 text-white px-2 py-1 rounded transition-colors duration-300 ease-in-out hover:bg-green-600"
                                    >History</button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Banner;
