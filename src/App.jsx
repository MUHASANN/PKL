// INI ADALAH ROUTER

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Landing/Navbar/navbar";
import Banner from "./Component/Landing/Banner/banner";

import Perangkaty from "./Page/perangkat";
import Detail from "./Page/detail";
import Historypage from "./Page/history-1";

function App() {
  return (
    <div className="flex flex-row justify-center w-full bg-gray-200">
       <div className="w-full h-[640px]">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perangkat" element={<Perangkaty />}/>
            <Route path="/detail-perangkat/:guid_device" element={<Detail />}/>
            <Route path="/history-perangkat/:guid_device" element={<Historypage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

function Home() {
  return(
    <div>
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;