import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Carddetail from "./card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { FaCamera } from "react-icons/fa";
import notFoundImage from '../../../public/404.png';
import { getDataHistory } from "../../Api/service/service";

const Banner = () => {
  const { guid_device } = useParams();
  const [deviceData, setDeviceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getDataHistory(1, 1, guid_device);
        console.log(response.history)
        console.log(deviceData)
        if (response && response.history) {
          setDeviceData(response.history);
        } else {
          setDeviceData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [guid_device]);

  if (loading) {
    return <div className="flex justify-center p-10">Loading...</div>;
  }

  if (deviceData.length === 0) {
    return <div className="flex justify-center p-10">No data available</div>;
  }

  const renderCards = deviceData.map((device, index) => {
    const guid = device.guid;
    const leftCardImage = device.value || notFoundImage;
    const deviceDescription = device.guid_device || "No description available";
    const deviceDate = new Date(device.datetime).toLocaleDateString();
    // const devicePosition = [device.latitude, device.longitude];

    return (
      <Carddetail
        key={index}
        id={guid}
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
        // rightcard3={
        //   <div className="h-[300px]">
        //     <MapContainer center={devicePosition} zoom={11} style={{ height: "100%", width: "100%" }}>
        //       <TileLayer
        //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //         attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        //       />
        //       <Marker position={devicePosition}>
        //         <Popup>{deviceName}</Popup>
        //       </Marker>
        //     </MapContainer>
        //   </div>
        // }
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
