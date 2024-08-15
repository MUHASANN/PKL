import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Landing/Navbar/navbar";

import { FaMapMarkedAlt, FaEllipsisH } from "react-icons/fa";
import iconImg from "../../../public/responsive.png";
import './style.css';

const DropdownMenu = ({ isOpen }) => {
  return (
    <div
      className={`absolute top-full right-0 mt-2 w-[18em] bg-white shadow-lg rounded-lg transition-transform transform origin-top-right ${
        isOpen ? "scale-100" : "scale-0"
      } z-20`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <img src={iconImg} alt="Icon" className="w-6 h-6 mr-3" />
          <p className="font-semibold text-gray-900">IoT Station</p>
        </div>
      </div>
      <div className="p-4">
        <Link to="#" className="flex items-center hover:text-gray-500">
          <span>Koleksi & perangkat</span>
        </Link>
      </div>
      <div className="p-4">
        <Link to="#" className="flex items-center hover:text-gray-500">
          <span>Setelan</span>
        </Link>
      </div>
    </div>
  );
};

const Banfi = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full h-[41em] bg-gray-200 relative">
      <Navbar />
      <div className="flex flex-col">
        <header className="flex justify-between items-center p-4">
          <nav className="flex items-center justify-start font-semibold bg-white w-full max-w-auto h-[60px] shadow-md rounded-lg relative">
            <Link to="/Peta-Lokasi">
              <button className="bg-white text-gray-900 py-2 px-4 rounded-lg mx-2 hover:bg-gray-200 hover:text-gray-600 ml-4 transition-colors duration-300 ease-in-out flex items-center">
                PETA <FaMapMarkedAlt className="ml-2" />
              </button>
            </Link>
            <Link to="/Histori-infromasi">
              <button className="bg-white text-gray-900 py-2 px-4 rounded-lg mx-2 hover:bg-gray-200 hover:text-gray-600 transition-colors duration-300 ease-in-out">
                HISTORI
              </button>
            </Link>
            <button className="ml-[38em] text-2xl text-gray-600 hover:text-gray-400 transform transition-transform duration-200 ease-in-out active:scale-90 relative"
              onClick={toggleDropdown}><FaEllipsisH className="mt-1" />
            </button>
            <DropdownMenu isOpen={isDropdownOpen} />
          </nav>
        </header>
        <main className="flex justify-between items-center p-4">
          <div className="flex items-center justify-start font-semibold bg-black w-full max-w-[52em] h-[435px] shadow-md rounded-lg">
            {/* main content */}
          </div>
          <div className="ml-3 flex flex-col h-[435px] w-[22em] bg-white rounded-lg shadow-lg">
            <div className="sticky top-0 bg-white z-10 rounded-t-lg border-b border-gray-200">
              <div className="flex justify-between px-6 py-4">
                <h2 className="text-2xl font-semibold text-gray-800">Lokasi Peta</h2>
                <span className="text-sm text-gray-500">+ 10 lokasi</span>
              </div>
            </div>
            <ul className="list-disc list-inside p-4 overflow-y-auto scrollbar-hidden hover:scrollbar-custom">
              <li className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 bg-gray-700 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Location 1</p>
                    <p className="text-sm text-gray-600">Deskripsi singkat tentang lokasi 1.</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </li>
              {/* Additional locations go here */}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Banfi;
