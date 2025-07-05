// src/layouts/MainLayout.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
