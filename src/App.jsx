import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Product1 from "./pages/Products/Product1";
import Product2 from "./pages/Products/Product2";

import MainLayout from "./layout/MainLayout";
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const isSlowConnection = navigator.connection &&
      (navigator.connection.effectiveType === '2g' || navigator.connection.saveData);

    const delay = isSlowConnection ? 5000 : 3000;

    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true); // Start fading
    }, delay);

    const removeSplashTimer = setTimeout(() => {
      setShowSplash(false); // Remove splash after fade completes
    }, delay + 600); // Wait for fade to finish (600ms)

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeSplashTimer);
    };
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen fadeOut={fadeOut} />
      ) : (
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
      )}
    </>
  );
}

export default App;
