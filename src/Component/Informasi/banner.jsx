import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Landing/Navbar/navbar";
import './style.css';

const Banfi = () => {
  return (
    <div className="w-full h-[41em] bg-gray-200">
      <Navbar />
      <div className="flex flex-col">
      <header className="flex justify-between items-center p-4 border-b-2">
          <nav className="flex items-center justify-start font-semibold bg-white w-full max-w-auto h-[60px] shadow-md rounded-lg">
            <Link to="/Peta-Lokasi">
              <button className="bg-white text-gray-900 py-2 px-4 rounded-lg mx-2 hover:bg-gray-200 hover:text-gray-600 ml-4 transition-colors duration-300 ease-in-out">
                PETA
              </button>
            </Link>
            <Link to="/Histori-infromasi">
              <button className="bg-white text-gray-900 py-2 px-4 rounded-lg mx-2 hover:bg-gray-200 hover:text-gray-600 transition-colors duration-300 ease-in-out">
                HISTORI
              </button>
            </Link>
            <button className="ml-[57em] text-gray-600 hover:text-gray-500">
              Menu
            </button>
          </nav>
        </header>
        <main className="flex justify-between items-center p-4">
          <div className="flex items-center justify-start font-semibold bg-black w-full max-w-[54em] h-[435px] shadow-md rounded-lg">
            {/* main content */}
          </div>
          <div className="ml-3 flex flex-col h-[435px] w-[20em] bg-white rounded-lg shadow-lg">
            <div className="sticky top-0 bg-white z-10 rounded-t-lg border-b border-gray-200">
                <div className="flex justify-between px-6 py-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Lokasi Peta</h2>
                    <span className="text-sm text-gray-500">+ 10 lokasi</span>
                </div>
            </div>
            <ul className="list-disc list-inside p-4 overflow-y-auto scrollbar-hidden hover:scrollbar-custom">
                <li className="mb-4 flex items-center">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></div>
                    Location 1
                </li>
                <li className="mb-4 flex items-center">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></div>
                    Location 2
                </li>
                <li className="mb-4 flex items-center">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></div>
                    Location 3
                </li>
                <li className="mb-4 flex items-center">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></div>
                    Location 4
                </li>
                <li className="mb-4 flex items-center">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></div>
                    Location 5
                </li>
                <li className="mb-4 flex items-center">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></div>
                    Location 6
                </li>
                <li className="mb-4 flex items-center">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></div>
                    Location 7
                </li>
                <li className="mb-4 flex items-center">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></div>
                    Location 8
                </li>
                <li className="mb-4 flex items-center">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></div>
                    Location 9
                </li>
                <li className="mb-4 flex items-center">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></div>
                    Location 10
                </li>
            </ul>
        </div>
        </main>
      </div>
    </div>
  );
};

export default Banfi;
