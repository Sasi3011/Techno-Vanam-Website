import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Product1 from "./pages/Products/Product1";
import Product2 from "./pages/Products/Product2";

import MainLayout from "./layout/MainLayout";

const App = () => {
  // REMOVED: const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOffline(false);
    const handleOffline = () => setOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // REMOVED: The timer that set loading to false
    // const timer = setTimeout(() => setLoading(false), 5000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      // REMOVED: clearTimeout(timer);
    };
  }, []);

  // UPDATED: Now it only checks if the user is offline
  if (offline) return <SplashScreen />;

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
};

export default App;