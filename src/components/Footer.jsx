import { Link, NavLink } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Products", to: "/product1" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <footer className="bg-[#F7F9FC] text-[#50577E] font-poppins text-sm pt-5 pb-3 px-4 sm:px-6 md:px-10 lg:px-20 w-full max-w-full">
      {/* Top Row: Logo - Links - Social */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="src/assets/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
          <span className="text-lg font-bold text-gray-900">Techno Vanam</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="hover:text-blue-600 transition text-sm"
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a href="#" className="text-green-500 hover:scale-110 transition">
            <FaWhatsapp />
          </a>
          <a href="#" className="text-pink-500 hover:scale-110 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-700 hover:scale-110 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="relative mt-4 mb-4 w-full">
        <div className="border-t border-gray-200 w-full"></div>
      </div>

      {/* Bottom Row: Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#50577E] gap-2 text-center sm:text-left">
        <div>
          Copyright © 2025 <span className="font-semibold">Techno Vanam ™</span>
        </div>
        <div>All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
