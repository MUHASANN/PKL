import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./card";
import notFoundImage from "/404.png";
import { FaClockRotateLeft } from "react-icons/fa6";
import { getDataHistory } from "../../Api/service/service";

const History = () => {
  const { guid_device } = useParams();
  const [deviceData, setDeviceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataHistory(1, 10, guid_device);
        console.log(response.history);
        console.log(deviceData);
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

    fetchData();
  }, [guid_device]);

  if (loading) {
    return <div className="flex justify-center p-10">Loading...</div>;
  }

  if (deviceData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-[10%]">
        <img src={notFoundImage} alt="404 Not Found" className="h-[20%] w-[20%] object-cover" />
        <span className="font-semibold text-gray-700 text-md ml-6">History Tidak Ditemukan?!</span>
      </div>
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

  const Item = deviceData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="p-4 mt-3 flex flex-col items-center bg-gray-200">
      <div className="w-full bg-white p-4 rounded-lg shadow-md mb-4 font-semibold">
        <div className="flex justify-start">
          <h1 className="text-2xl font-bold">History</h1>
          <FaClockRotateLeft className="ml-2 mt-2 text-[20px] text-yellow-400" />
        </div>
        <div className="grid grid-cols-5 gap-4 w-full font-semibold">
          {Item.map((card) => (
            <Card key={card.guid} guid_device={card.guid_device} image={`https://smartparking.pptik.id/data/data/${leftCardImage}`} title={card.guid_device} description={card.datetime} />
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
