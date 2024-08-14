import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Peta = () => {
    return (
        <div className="w-full h-[40em] bg-gray-50 flex justify-center items-start">
            <div className="w-full h-full bg-white rounded-lg relative">
                {/* Leaflet Map Section */}
                <MapContainer 
                    center={[51.505, -0.09]} 
                    zoom={13} 
                    className="h-full w-full rounded-lg z-0">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>

                {/* Header Section */}
                <div className="absolute top-3 left-0 w-[56em] ml-[20em] flex justify-between items-center p-3 bg-white rounded-lg shadow-lg z-10">
                    <div className="w-8 h-8 bg-blue-300 rounded-full flex justify-center items-center ml-2">
                            {/* Add icon or content here */}
                        </div>
                        <div className="w-8 h-8 bg-yellow-300 rounded-full flex justify-center items-center ml-2">
                            {/* Add icon or content here */}
                        </div>
                        <div className="w-8 h-8 bg-green-300 rounded-full flex justify-center items-center ml-2 mr-2">
                            {/* Add icon or content here */}
                        </div>
                    <div className="flex-grow mx-4">
                        <input
                            type="text"
                            className="w-[32em] h-8 p-2 rounded bg-gray-200 border border-gray-300"
                            placeholder="Search..."
                        />
                    </div>
                    <h2 className="text-gray-900 text-lg font-semibold mr-10">
                        PETA LOKASI
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Peta;
