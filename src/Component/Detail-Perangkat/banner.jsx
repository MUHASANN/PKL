import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carddetail from "./card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaCamera } from "react-icons/fa";
import notFoundImage from "../../../public/404.png";
import { getDataHistory, getDataDeviceCamera } from "../../Api/service/service";

const Banner = () => {
  const { guid_device,guid } = useParams();
  const [deviceData, setDeviceData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [formattedDates, setFormattedDate] = useState("");
  const [deviceDescription, setDeviceDescription] = useState("");
  const [realTimeData, setRealTimeData] = useState({});
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const historyResponse = await getDataHistory(1, 1, guid_device);
        setHistoryData(historyResponse.history || []);
        const deviceResponse = await getDataDeviceCamera(guid);
       
        setDeviceData(Array.isArray(deviceResponse) ? deviceResponse : []);
        if (deviceResponse.length > 0) {
          setLatitude(deviceResponse[0].latitude);
          setLongitude(deviceResponse[0].longitude);
          setDeviceDescription(deviceResponse[0].name);
          console.log(deviceResponse[0])
          console.log(deviceResponse[0].name)
          const formattedDate = new Date(
            deviceResponse[0].create_at
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit",
          });
          setFormattedDate(formattedDate);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Set up the interval to fetch image data every 10 seconds
    const id = setInterval(async () => {
      try {
        const deviceResponse = await getDataDeviceCamera(guid_device);
        if (Array.isArray(deviceResponse)) {
          setRealTimeData(deviceResponse[0]);
        }
      } catch (error) {
        console.error("Error fetching real-time data:", error);
      }
    }, 600000); // 10 seconds interval

    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, [guid_device]);

  useEffect(() => {
    const ws = new WebSocket(`wss://worker-cctv.pptik.id:8726`);
    ws.onopen = () => {
      console.log("WebSocket connection opened");
      ws.send(JSON.stringify({ action: "subscribe", topic: guid_device }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setRealTimeData(data);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, [guid_device]);

  if (loading) {
    return (
      <div className="flex flex-col items-center p-10">
        <div className="animate-pulse w-full max-w-md">
          <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
        </div>
      </div>
    );
  }

  if (historyData.length === 0 && deviceData.length === 0) {
    return <div className="flex justify-center p-10">No data available</div>;
  }


  if (historyData.length === 0) {
    return (
      <div className="flex justify-center p-10">
        <div>No history data available.</div>
      </div>
    );
  }

  if (deviceData.length === 0) {
    return (
      <div className="flex justify-center p-10">
        <div>No device data available.</div>
      </div>
    );
  }

  const renderCards = historyData.map((history, guid) => {
    const guidDevice = history.guid_device;
    const leftCardImage = history.value || notFoundImage;

  const renderCards = historyData.map((history, index) => {
    const guidDevice = history.guid_device;
    const leftCardImage = history.value || notFoundImage;
    const deviceDescription = history.guid_device || "No description available";
    const deviceDate = history.datetime;


    return (
      <Carddetail
        key={index}
        guid_device={guidDevice}
        // Data terakhir
        leftcard={
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-2">Data Terakhir</h3>
            <img
              src={`https://smartparking.pptik.id/data/data/${leftCardImage}`}
              alt="Realtime Image"
              className="w-full h-[200px] object-cover rounded-lg mb-2"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://monitoring.pptik.id/data/RFIDCAM/no_image.jpg";
              }}
            />
            <p className="text-sm text-gray-600">{formattedDates}</p>
          </div>
        }
        // Data realtime
        leftcard2={
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-2">Data Realtime</h3>
            <img
              src={`https://smartparking.pptik.id/data/data/${
                realTimeData.value || notFoundImage
              }`}
              alt="Last Data Image"
              className="w-full h-[200px] object-cover rounded-lg mb-2"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://monitoring.pptik.id/data/RFIDCAM/no_image.jpg";
              }}
            />
            <p className="text-sm text-gray-600">
              Waktu: {realTimeData.datetime || "No data available"}
            </p>
          </div>
        }
        centercard={
          <div className="flex justify-end items-center h-full">
            <span className="text-xl font-semibold text-gray-100">Camera</span>
            <FaCamera className="text-gray-100 ml-2 text-2xl" />
          </div>
        }
        rightcard={
          <div>
            <h2 className="text-xl font-semibold">Device :</h2>

            <p className="mt-2 text-md font-semibold">
              {deviceDescription || "No device description available"}
            </p>

            <p className="mt-2 text-sm">{deviceDescription}</p>

          </div>
        }
        rightcard2={
          <div>

            <h2 className="text-xl font-semibold">Tanggal Registrasi :</h2>
            <p className="text-md mt-2 font-semibold">
              {formattedDates || "No registration date available"}
            </p>

            <h2 className="text-xl font-semibold">Tanggal :</h2>
            <p className="text-sm mt-2">{deviceDate}</p>

          </div>
        }
        rightcard3={
          <div className="h-[450px]">
            <MapContainer
              center={[latitude, longitude]}
              zoom={8}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {deviceData.length > 0 &&
                deviceData.map((device) => (
                  <Marker
                    key={device.guid}
                    position={[device.latitude, device.longitude]}
                  >
                    <Popup>
                      <div>
                        <strong>{device.name}</strong>
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
