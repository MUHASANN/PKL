import React from "react";
import { useParams } from 'react-router-dom';
import Carddetail from "./card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { FaClipboard } from "react-icons/fa";
import exampleImage from '../../asset/CCTV/Bogor.jpeg';
import exampleImage2 from '../../asset/CCTV/Bogor2.jpeg';
import notFoundImage from '/404.png';

const cardData = {
  1: {
    leftcard: <img src={exampleImage} alt="Example" className="w-full h-[200px] object-cover rounded-lg" />,
    leftcard2: <img src={exampleImage2} alt="Example" className="w-full h-[200px] object-cover rounded-lg" />,
    centercard: (
      <div className="flex justify-end items-center h-full">
        <span className="text-xl font-semibold text-gray-100">Details</span>
        <FaClipboard className="text-gray-100 ml-2" />
      </div>
    ),
    rightcard: (
      <div>
        <h2 className="text-xl font-semibold">Perangkat 01</h2>
        <p className="mt-2 font-semibold">Bogor-Baranang-Siang Device-LT8004.</p>
      </div>
    ),
    rightcard2: (
      <div>
        <h2 className="text-xl font-semibold">Tanggal :</h2>
        <p className="text-md mt-2 font-semibold">25/07/2024</p>
      </div>
    ),
    rightcard3: (
      <div className="h-full">
        <MapContainer center={[-6.595038, 106.816635]} zoom={11} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-6.595038, 106.816635]}>
            <Popup>
              A popup for the marker.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  },

  2: {
    leftcard: <img src={exampleImage} alt="Example" className="w-full h-[200px] object-cover rounded-lg" />,
    leftcard2: <img src={exampleImage2} alt="Example" className="w-full h-[200px] object-cover rounded-lg" />,
    centercard: (
      <div className="flex justify-end items-center h-full">
        <span className="text-xl font-semibold text-gray-100">Details</span>
        <FaClipboard className="text-gray-100 ml-2" />
      </div>
    ),
    rightcard: (
      <div>
        <h2 className="text-xl font-semibold">Perangkat 02</h2>
        <p className="mt-2 font-semibold">Lampung-KotaBumi Device-LR9012.</p>
      </div>
    ),
    rightcard2: (
      <div>
        <h2 className="text-xl font-semibold">Tanggal :</h2>
        <p className="text-md mt-2 font-semibold">25/07/2024</p>
      </div>
    ),
    rightcard3: (
      <div className="h-full">
        <MapContainer center={[-5.382054, 104.857636]} zoom={11} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-5.382054, 104.857636]}>
            <Popup>
              A popup for the marker.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  },

  6: {
    leftcard: <img src={exampleImage} alt="Example" className="w-full h-[200px] object-cover rounded-lg" />,
    leftcard2: <img src={exampleImage2} alt="Example" className="w-full h-[200px] object-cover rounded-lg" />,
    centercard: (
      <div className="flex justify-end items-center h-full">
        <span className="text-xl font-semibold text-gray-100">Details</span>
        <FaClipboard className="text-gray-100 ml-2" />
      </div>
    ),
    rightcard: (
      <div>
        <h2 className="text-xl font-semibold">Perangkat 06</h2>
        <p className="mt-2 font-semibold">Yogyakarta-Maliboro Device-LM5044.</p>
      </div>
    ),
    rightcard2: (
      <div>
        <h2 className="text-xl font-semibold">Tanggal :</h2>
        <p className="text-md mt-2 font-semibold">25/07/2024</p>
      </div>
    ),
    rightcard3: ( 
      <div className="h-full">
        <MapContainer center={[-7.795578, 110.364145]} zoom={11} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-7.795578, 110.364145]}>
            <Popup>
              A popup for the marker.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  },

  13: {
    leftcard: <img src={exampleImage} alt="Example" className="w-full h-[200px] object-cover rounded-lg" />,
    leftcard2: <img src={exampleImage2} alt="Example" className="w-full h-[200px] object-cover rounded-lg" />,
    centercard: (
      <div className="flex justify-end items-center h-full">
        <span className="text-xl font-semibold text-gray-100">Details</span>
        <FaClipboard className="text-gray-100 ml-2" />
      </div>
    ),
    rightcard: (
      <div>
        <h2 className="text-xl font-semibold">Perangkat 13</h2>
        <p className="mt-2 font-semibold">Taman-Nasional-Komodo Device-LAV0399.</p>
      </div>
    ),
    rightcard2: (
      <div>
        <h2 className="text-xl font-semibold">Tanggal :</h2>
        <p className="text-md mt-2 font-semibold">25/07/2024</p>
      </div>
    ),
    rightcard3: (
      <div className="h-full">
        <MapContainer center={[-8.5669, 119.4910]} zoom={11} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-8.5669, 119.4910]}>
            <Popup>
              A popup for the marker.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  },
};

const Banner = () => {
  const { id } = useParams();
  const data = cardData[id];

  if (!data) {
    return (
    <div className="flex flex-col items-center justify-center h-full text-center py-[10%]">
      <img src={notFoundImage} alt="404 Not Found" className="h-[20%] w-[20%] object-cover" />
    </div>
    );
  }

  return (
    <div className="relative">
      <Carddetail
        id={id}
        leftcard={data.leftcard}
        leftcard2={data.leftcard2}
        centercard={data.centercard}
        rightcard={data.rightcard}
        rightcard2={data.rightcard2}
        rightcard3={data.rightcard3}
      />
    </div>
  );
};

export default Banner;
