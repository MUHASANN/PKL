import React, { useState, useEffect } from "react";
import Card from "./card";
import { FaSearch, FaDesktop, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { getDataDevice } from "../../Api/service/service";

const ITEMS_PER_PAGE = 8;

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await getDataDevice();
      setData(data.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
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
    <div className="p-2 mt-4 min-h-full">
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xmd flex justify-between items-center">
          <FaDesktop className="absolute text-blue-900 w-[30px] h-[30px] ml-3 mb-1" />
          <span className="ml-14 mb-1 text-[25px] text-gray-700 font-semibold hover:text-gray-500">PERANGKAT</span>
          <div className="relative mr-2 mt-3 w-[500px] transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <input 
              type="text" 
              placeholder="Cari perangkat..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4 p-2 pl-4 border border-gray-300 rounded w-full" 
            />
            <FaSearch className="absolute right-3 top-5 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {currentCards.map((card) => (
          <Card
            key={card.guid}
            guid={card.guid}
            guid_device={card.guid_device}
            title={card.name}
            description={card.guid_device}
            buttonLabel="View"
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <button 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
        >
          <div className="flex justify-between"><FaAngleLeft className="mt-1 mr-2 text-lg text-gray-600" /> Previous</div>
        </button>
        <span className="mx-auto text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
        >
          <div className="flex justify-between">Next <FaAngleRight className="mt-1 ml-2 text-lg text-gray-600" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Banner;
