import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Carddetail from "./card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { FaCamera } from "react-icons/fa";
import notFoundImage from '../../../public/404.png';
import { getDataHistory, getDataDevice } from "../../Api/service/service";

const Banner = () => {
  const { guid_device } = useParams();
  const [deviceData, setDeviceData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const historyResponse = await getDataHistory(1, 1, guid_device);
        const deviceResponse = await getDataDevice();

        setHistoryData(Array.isArray(historyResponse.history) ? historyResponse.history : []);
        setDeviceData(Array.isArray(deviceResponse) ? deviceResponse : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [guid_device]);

  if (loading) {
    return <div className="flex justify-center p-10">Loading...</div>;
  }

  if (historyData.length === 0 && deviceData.length === 0) {
    return <div className="flex justify-center p-10">No data available</div>;
  }

  const renderCards = historyData.map((history, index) => {
    const guidDevice = history.guid_device;
    const leftCardImage = history.value || notFoundImage;
    const deviceDescription = history.guid_device || "No description available";
    const deviceDate = new Date(history.datetime).toLocaleDateString();

    return (
      <Carddetail
        key={index}
        guid_device={guidDevice}
        leftcard={<img src={`https://smartparking.pptik.id/data/data/${leftCardImage}`} alt="Device" className="w-full h-[200px] object-cover rounded-lg" />}
        leftcard2={<img src={`https://smartparking.pptik.id/data/data/${leftCardImage}`} alt="Device" className="w-full h-[200px] object-cover rounded-lg" />}
        centercard={
          <div className="flex justify-end items-center h-full">
            <span className="text-xl font-semibold text-gray-100">Camera</span>
            <FaCamera className="text-gray-100 ml-2 text-2xl" />
          </div>
        }
        rightcard={
          <div>
            <h2 className="text-xl font-semibold">Device :</h2>
            <p className="mt-2 text-md font-semibold">{deviceDescription}</p>
          </div>
        }
        rightcard2={
          <div>
            <h2 className="text-xl font-semibold">Tanggal :</h2>
            <p className="text-md mt-2 font-semibold">{deviceDate}</p>
          </div>
        }
        rightcard3={
          <div className="h-[266px]">
            <MapContainer center={[-6.595038, 106.816635]} zoom={11} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {deviceData.map((device) => (
                <Marker
                  key={device.guid}
                  position={[device.latitude, device.longitude]}
                >
                  <Popup>
                    <div>
                      <strong>{device.name}</strong>
                      <p>Latitude: {device.latitude}</p>
                      <p>Longitude: {device.longitude}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        }
      />
    );
  });

  return (
    <div className="relative">
      {renderCards}
    </div>
  );
};

export default Banner;
