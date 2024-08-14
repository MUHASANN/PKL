import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./card";
import notFoundImage from "/404.png";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { getDataHistory } from "../../Api/service/service";

const History = () => {
  const { guid_device } = useParams();
  const [deviceData, setDeviceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataHistory(1, 20, guid_device);
        if (response && Array.isArray(response.history)) {
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

    fetchData();
  }, [guid_device]);

  if (loading) {
    return <div className="flex justify-center p-10">Loading...</div>;
  }

  if (deviceData.length === 0) {
    return (
      <div className="flex justify-center p-10">No data available</div>
    );
  }

  const itemsPerPage = 10;
  const totalPages = Math.ceil(deviceData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const currentItems = deviceData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return ( 
    <div className="p-4 flex flex-col items-center bg-gray-200">
      <div className="w-full bg-white p-4 rounded-lg shadow-md mb-4 font-semibold">
        <div className="flex items-center mb-1">
          <h1 className="text-3xl font-bold flex-grow">History</h1>
          <FaClockRotateLeft className="text-[20px] text-yellow-400 mr-[51em]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full font-semibold">
        {currentItems.map((card) => (
          <Card
            key={card.guid}
            image={card.value || notFoundImage}
            title={card.guid_device}
            description={card.datetime}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-between w-full">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="bg-gray-300 text-gray-900 px-4 py-2 rounded-lg disabled:opacity-50 flex items-center"
        >
          <FaAngleLeft className="text-lg text-gray-900" />
          <span className="ml-2">Previous</span>
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="bg-gray-300 text-gray-900 px-4 py-2 rounded-lg disabled:opacity-50 flex items-center"
        >
          <span className="mr-2">Next</span>
          <FaAngleRight className="text-lg text-gray-900" />
        </button>
      </div>
    </div>
  );
};

export default History;
