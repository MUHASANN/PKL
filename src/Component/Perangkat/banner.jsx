// src/Component/Perangkat/banner.jsx
import React, { useState } from "react";
import Card from "./card";
import { FaSearch, FaDesktop, FaAngleRight, FaAngleLeft } from "react-icons/fa";

const cardData = [
  { id: 1, title: "Perangkat 01", description: "Location Perangkat Bogor", buttonLabel: "Detail" },
  { id: 2, title: "Perangkat 02", description: "Location Perangkat Lampung", buttonLabel: "Detail" },
  { id: 3, title: "Perangkat 03", description: "Location Perangkat Bandung", buttonLabel: "Detail" },
  { id: 4, title: "Perangkat 04", description: "Location Perangkat Semarang", buttonLabel: "Detail" },
  { id: 5, title: "Perangkat 05", description: "Location Perangkat Depok", buttonLabel: "Detail" },
  { id: 6, title: "Perangkat 06", description: "Location Perangkat Yogyakarta", buttonLabel: "Detail" },
  { id: 7, title: "Perangkat 07", description: "Location Perangkat Bekasi", buttonLabel: "Detail" },
  { id: 8, title: "Perangkat 08", description: "Location Perangkat Jakarta", buttonLabel: "Detail" },
  { id: 9, title: "Perangkat 09", description: "Location Perangkat Padang", buttonLabel: "Detail" },
  { id: 10, title: "Perangkat 10", description: "Location Perangkat Jambi", buttonLabel: "Detail" },
  { id: 11, title: "Perangkat 11", description: "Location Perangkat Bali", buttonLabel: "Detail" },
  { id: 12, title: "Perangkat 12", description: "Location Perangkat Madura", buttonLabel: "Detail" },
  { id: 13, title: "Perangkat 13", description: "Location Perangkat NTT", buttonLabel: "Detail" },
  { id: 14, title: "Perangkat 14", description: "Location Perangkat Gorontalo", buttonLabel: "Detail" },
  { id: 15, title: "Perangkat 15", description: "Location Perangkat Pontianak", buttonLabel: "Detail" },
  { id: 16, title: "Perangkat 16", description: "Location Perangkat Tanggerang", buttonLabel: "Detail" },
];

const ITEMS_PER_PAGE = 8;

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCards = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredCards.length);
  const currentCards = filteredCards.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
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
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            buttonLabel={card.buttonLabel}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-300 disabled:bg-white">
          <div className="flex justify-between"><FaAngleLeft className="mt-1 mr-2 text-lg text-gray-600" /> Previous</div>
        </button>
        <span className="mx-auto text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-300 disabled:bg-white">
          <div className="flex justify-between">Next <FaAngleRight className="mt-1 ml-2 text-lg text-gray-600" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Banner;
