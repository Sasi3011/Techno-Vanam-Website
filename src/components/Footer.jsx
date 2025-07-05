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
    <footer className="bg-[#F7F9FC] text-[#50577E] font-poppins text-sm pt-10 pb-6 px-4 md:px-10 lg:px-20">
      {/* Top Row: Logo - Links - Social */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="src/assets/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-lg font-bold text-gray-900">Techno Vanam</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="hover:text-blue-600 transition"
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
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

      {/* Divider with Plus Icon */}
      <div className="relative mt-8 mb-6">
        <div className="border-t border-gray-200 w-full"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#F7F9FC] px-2">
          <div className="   border-gray-300 flex items-center justify-center text-xs text-gray-500">
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-[#50577E]">
        Copyright © 2025 <span className="font-semibold">Techno Vanam ™</span> | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
