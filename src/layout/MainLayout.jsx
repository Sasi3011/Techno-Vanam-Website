import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname]);
  return (
    <>
      {/* Sticky header (non-scrollable) */}
      <Header />

      {/* Scrollable area below header (main + footer) */}
      <div ref={scrollRef} className="custom-scrollbar overflow-y-auto h-[calc(100vh-76px)]">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
