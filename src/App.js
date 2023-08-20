import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import CoWorkers from "./pages/CoWorkers";
import Feedback from "./pages/Feedback";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Tanzif from "./pages/Tanzif";
import Wipes from "./pages/Wipes";
import Toper from "./pages/Toper";
import BinterPage from "./pages/BinterPage";

function App() {
  return (
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/coworkers' element={<CoWorkers />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:page' element={<BinterPage />} />
            <Route path='/product/tanzif' element={<Tanzif />} />
            <Route path='/product/wipes' element={<Wipes />} />
            <Route path='/product/top' element={<Toper />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
