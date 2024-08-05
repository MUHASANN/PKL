import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Search from '../../../Component/Landing/Banner/search';
import { getDataDevice } from '../../../Api/service/service';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import L from 'leaflet';
// import '../../../../src/Map.css';
import Loader from './load';

const Banner = () => {
    const [activeMarker, setActiveMarker] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const mapRef = useRef();
    const navigate = useNavigate();
    const [markersCluster, setMarkersCluster] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await getDataDevice();
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch data:", error);
            setLoading(false);
        }
    };

    const handleSearch = (searchTerm) => {
        console.log('Searching for:', searchTerm);
        const marker = data.find((m) =>
            m.guid === searchTerm ||
            m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (searchTerm.includes(",") && checkCoordinates(searchTerm, m))
        );
        if (marker) {
            console.log('Found marker:', marker);
            if (mapRef.current) {
                mapRef.current.setView([marker.latitude, marker.longitude], 13);
                setActiveMarker(marker);
            }
        } else {
            console.log('Titik Lokasi Tidak Ditemukan');
        }
    };

    const checkCoordinates = (searchTerm, marker) => {
        const [lat, lng] = searchTerm.split(',').map(coord => parseFloat(coord.trim()));
        return Math.abs(marker.latitude - lat) < 0.0001 && Math.abs(marker.longitude - lng) < 0.0001;
    };

    const handleMarkerClick = (marker) => {
        setActiveMarker(marker);
    };

    const handleDetailClick = () => {
        if (activeMarker) {
            navigate(`/detail-perangkat/${activeMarker.guid_device}`);
        }
    };

    const handleHistoryClick = () => {
        if (activeMarker) {
            navigate(`/history-perangkat/${activeMarker.guid_device}`);
        }
    };

    const groupMarkers = () => {
        const groupedMarkers = {};
        data.forEach(marker => {
            const lat = marker.latitude.toFixed(2);
            const lng = marker.longitude.toFixed(2);
            const key = `${lat},${lng}`;
            if (!groupedMarkers[key]) {
                groupedMarkers[key] = [];
            }
            groupedMarkers[key].push(marker);
        });
        return groupedMarkers;
    };

    const toggleCluster = () => {
        if (markersCluster) {
            markersCluster.clearLayers();
            setMarkersCluster(null);
        } else {
            const markerClusters = L.markerClusterGroup();
            const groupedMarkers = groupMarkers();
            Object.keys(groupedMarkers).forEach(key => {
                const [lat, lng] = key.split(',').map(Number);
                if (groupedMarkers[key].length > 1) {
                    const centerMarker = L.marker([lat, lng]).on('click', () => {
                        groupedMarkers[key].forEach(marker => {
                            L.marker([marker.latitude, marker.longitude]).addTo(mapRef.current);
                        });
                    });
                    markerClusters.addLayer(centerMarker);
                } else {
                    const marker = groupedMarkers[key][0];
                    markerClusters.addLayer(L.marker([marker.latitude, marker.longitude]));
                }
            });
            mapRef.current.addLayer(markerClusters);
            setMarkersCluster(markerClusters);
        }
    };

    return (
        <div className="relative flex justify-center items-center w-full">
            <div className="absolute top-4 left-4 z-50 mt-2 ml-[6%] transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <Search onSearch={handleSearch} />
            </div>
            {loading ? (
                <div className="absolute top-[300px] inset-0 flex justify-center items-center bg-white bg-opacity-75 z-40">
                    <Loader />
                </div>
            ) : (
                <div className="w-[1190px] h-[530px] bg-white border-2 border-gray-300 rounded-lg shadow-lg flex justify-center items-center mt-4 relative z-10 font-semibold">
                    <MapContainer 
                        center={[-6.595038, 106.816635]} 
                        zoom={8} 
                        style={{ height: '80%', width: '90%', borderRadius: '8px', marginTop: '50px' }} 
                        whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
                    >
                        <TileLayer 
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />

                        {data.map((marker) => (
                            <Marker 
                                key={marker.guid} 
                                position={[marker.latitude, marker.longitude]} 
                                eventHandlers={{ click: () => handleMarkerClick(marker) }}
                            >
                                <Popup>
                                    {marker.name}
                                    <div className="mt-2 flex gap-2">
                                        <button 
                                            onClick={handleDetailClick} 
                                            className="bg-blue-500 text-white px-2 py-1 rounded transition-colors duration-300 ease-in-out hover:bg-blue-600"
                                        >
                                            Detail
                                        </button>
                                        <button 
                                            onClick={handleHistoryClick} 
                                            className="bg-green-500 text-white px-2 py-1 rounded transition-colors duration-300 ease-in-out hover:bg-green-600"
                                        >
                                            History
                                        </button>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}

                        <button 
                            onClick={toggleCluster} 
                            className="absolute top-4 right-4 z-50 bg-white border border-gray-300 rounded-full p-2 shadow-lg"
                            style={{ zIndex: 1000 }}
                        >
                            <span className="text-blue-500">+</span>
                        </button>
                    </MapContainer>
                </div>
            )}
        </div>
    );
};

export default Banner;
