import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Product1 from "./pages/Products/Product1";
import Product2 from "./pages/Products/Product2";

import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
