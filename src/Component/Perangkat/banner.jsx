import React, { useState, useEffect } from "react";
import Card from "./card";
import { FaSearch, FaDesktop, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { getDataDevice } from "../../Api/service/service";

const ITEMS_PER_PAGE = 4;

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await getDataDevice();
      setData(data.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCards = data.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredCards.length);
  const currentCards = filteredCards.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="p-6 mt-4 w-full h-full bg-gray-200">
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xmd flex justify-between items-center">
          <FaDesktop className="absolute text-blue-900 w-[30px] h-[30px] ml-3 mb-1" />
          <span className="ml-14 mb-1 text-[25px] text-gray-700 font-semibold hover:text-gray-500">
            PERANGKAT
          </span>
          <div className="relative mr-2 mt-3 w-[500px]">
            <input 
              type="text" 
              placeholder="Cari perangkat..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4 p-3 pl-4 border border-gray-300 rounded-lg w-full" 
            />
            <FaSearch className="absolute right-3 top-6 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 bg-white p-4 mt-6 rounded-lg shadow-md">
        {loading
          ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <div
                key={index}
                className="p-6 bg-gray-300 custom-pulse rounded-lg flex flex-col space-y-3">
                <div className="h-6 bg-gray-400 rounded w-3/4"></div>
                <div className="h-5 bg-gray-400 rounded w-1/2"></div>
                <div className="h-8 bg-gray-400 rounded w-1/3"></div>
              </div>
            ))
          : currentCards.map((card) => (
              <Card
                key={card.guid}
                guid_device={card.guid_device}
                title={card.name}
                description={card.guid_device}
                buttonLabel="View"
              />
            ))}
      </div>
      <div className="flex items-center justify-between mt-6 bg-white p-4 rounded-lg shadow-md">
        <button 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-200"
        >
          <div className="flex justify-between items-center">
            <FaAngleLeft className="text-lg text-gray-700" /> 
            <span className="ml-2">Previous</span>
          </div>
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-200"
        >
          <div className="flex justify-between items-center">
            <span className="mr-2">Next</span>
            <FaAngleRight className="text-lg text-gray-700" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Banner;
