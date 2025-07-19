import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Sticky header (non-scrollable) */}
      <Header />

      {/* Scrollable area below header (main + footer) */}
      <div className="custom-scrollbar overflow-y-auto h-[calc(100vh-76px)]">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
