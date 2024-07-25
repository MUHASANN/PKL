import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./card";
import Cameraimg from "../../asset/CCTV/Bogor.jpeg";
import Cameraimg2 from "../../asset/CCTV/Bogor2.jpeg";
import notFoundImage from "/404.png"
import { FaClockRotateLeft } from "react-icons/fa6";

const History = () => {
  const { id } = useParams();

  const textData = [
    { id: 1, description: "Bogor-Baranang-Siang Device-LT8004" },
    { id: 6, description: "Bogor-Maliboro Device-LM5044" },
    { id: 13, description: "Taman-Nasional-Komodo Device-LAV0399" },
  ];

  const cardData = [
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "24/07/2024 08:31:20" },
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "24/07/2024 08:32:20" },
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "24/07/2024 08:36:01" },
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "24/07/2024 08:37:52" },
    { id: 1, image: Cameraimg2, title: "Device-LT8004", description: "24/07/2024 09:20:41" },
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "24/07/2024 09:20:42" },
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "24/07/2024 11:07:10" },
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "24/07/2024 11:09:50" },
    { id: 1, image: Cameraimg2, title: "Device-LT8004", description: "24/07/2024 11:12:40" },
    { id: 1, image: Cameraimg2, title: "Device-LT8004", description: "24/07/2024 11:50:20" },
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "25/07/2024 08:26:52" },
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "25/07/2024 08:05:22" },
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "26/07/2024 10:12:40" },
    { id: 1, image: Cameraimg2, title: "Device-LT8004", description: "26/07/2024 11:07:10" },
    { id: 1, image: Cameraimg2, title: "Device-LT8004", description: "26/07/2024 11:55:50" },
    { id: 1, image: Cameraimg2, title: "Device-LT8004", description: "25/07/2024 12:10:20" },
    { id: 1, image: Cameraimg2, title: "Device-LT8004", description: "25/07/2024 12:36:01" },
    { id: 1, image: Cameraimg2, title: "Device-LT8004", description: "27/07/2024 13:00:00" },
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "26/07/2024 13:20:42" },
    { id: 1, image: Cameraimg, title: "Device-LT8004", description: "25/07/2024 14:01:20" },

    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "24/07/2024 08:31:20" },
    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "24/07/2024 08:32:20" },
    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "24/07/2024 08:36:01" },
    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "24/07/2024 08:37:52" },
    { id: 6, image: Cameraimg2, title: "Device-LM5044", description: "24/07/2024 09:20:41" },
    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "24/07/2024 09:20:42" },
    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "24/07/2024 11:07:10" },
    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "24/07/2024 11:09:50" },
    { id: 6, image: Cameraimg2, title: "Device-LM5044", description: "24/07/2024 11:12:40" },
    { id: 6, image: Cameraimg2, title: "Device-LM5044", description: "24/07/2024 11:50:20" },
    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "25/07/2024 08:26:52" },
    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "25/07/2024 08:05:22" },
    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "26/07/2024 10:12:40" },
    { id: 6, image: Cameraimg2, title: "Device-LM5044", description: "26/07/2024 11:07:10" },
    { id: 6, image: Cameraimg2, title: "Device-LM5044", description: "26/07/2024 11:55:50" },
    { id: 6, image: Cameraimg2, title: "Device-LM5044", description: "25/07/2024 12:10:20" },
    { id: 6, image: Cameraimg2, title: "Device-LM5044", description: "25/07/2024 12:36:01" },
    { id: 6, image: Cameraimg2, title: "Device-LM5044", description: "27/07/2024 13:00:00" },
    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "26/07/2024 13:20:42" },
    { id: 6, image: Cameraimg, title: "Device-LM5044", description: "25/07/2024 14:01:20" },

    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "24/07/2024 08:31:20" },
    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "24/07/2024 08:32:20" },
    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "24/07/2024 08:36:01" },
    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "24/07/2024 08:37:52" },
    { id: 13, image: Cameraimg2, title: "Device-LAV0399", description: "24/07/2024 09:20:41" },
    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "24/07/2024 09:20:42" },
    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "24/07/2024 11:07:10" },
    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "24/07/2024 11:09:50" },
    { id: 13, image: Cameraimg2, title: "Device-LAV0399", description: "24/07/2024 11:12:40" },
    { id: 13, image: Cameraimg2, title: "Device-LAV0399", description: "24/07/2024 11:50:20" },
    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "25/07/2024 08:26:52" },
    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "25/07/2024 08:05:22" },
    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "26/07/2024 10:12:40" },
    { id: 13, image: Cameraimg2, title: "Device-LAV0399", description: "26/07/2024 11:07:10" },
    { id: 13, image: Cameraimg2, title: "Device-LAV0399", description: "26/07/2024 11:55:50" },
    { id: 13, image: Cameraimg2, title: "Device-LAV0399", description: "25/07/2024 12:10:20" },
    { id: 13, image: Cameraimg2, title: "Device-LAV0399", description: "25/07/2024 12:36:01" },
    { id: 13, image: Cameraimg2, title: "Device-LAV0399", description: "27/07/2024 13:00:00" },
    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "26/07/2024 13:20:42" },
    { id: 13, image: Cameraimg, title: "Device-LAV0399", description: "25/07/2024 14:01:20" },
  ];

  const filteredCardData = cardData.filter(card => card.id.toString() === id);
  const filteredTextData = textData.filter(text => text.id.toString() === id);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredCardData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const currentItems = filteredCardData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="p-4 mt-3 flex flex-col items-center bg-gray-200">
      
      {filteredTextData.length > 0 && (
        <div className="w-full bg-white p-4 rounded-lg shadow-md mb-4 font-semibold">
          <div className="flex justify-start">
            <h1 className="text-2xl font-bold">History</h1>
            <FaClockRotateLeft className="ml-2 mt-2 text-[20px] text-yellow-400" />
          </div>
          {filteredTextData.map((text) => (
            <p key={text.id} className="text-gray-700">{text.description}</p>
          ))}
        </div>
      )}

      {filteredCardData.length > 0 ? (
        <>
          <div className="grid grid-cols-5 gap-4 w-full font-semibold">
            {currentItems.map((card) => (
              <Card key={card.id} id={card.id} image={card.image} title={card.title} description={card.description} />
            ))}
          </div>
          <div className="mt-4">
            <button onClick={handlePreviousPage} disabled={currentPage === 0} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l-lg disabled:opacity-50">
              Previous
            </button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages - 1} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r-lg disabled:opacity-50">
              Next
            </button>
          </div>
        </>
      ) : (
      <div className="flex flex-col items-center justify-center h-full text-center py-[10%]">
        <img src={notFoundImage} alt="404 Not Found" className="h-[60%] w-[60%] object-cover" />
        <span className="font-semibold text-gray-700 text-md ml-6">History Tidak Ditemukan?!</span>
      </div>
      )}
    </div>
  );
};

export default History;
