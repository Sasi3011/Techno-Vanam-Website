import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png"; // Import the logo image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Products", to: "/product1" },
    { name: "Portfolio", to: "/portfolio" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo + Brand Name */}
        <Link 
          to="/" 
          className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold text-gray-800"
          aria-label="Techno Vanam Home"
        >
          <img 
            src={Logo} 
            alt="Techno Vanam Logo" 
            className="h-8 sm:h-10 w-auto object-contain" 
          />
          <span className="text-lg sm:text-2xl font-bold">Techno Vanam</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `text-sm xl:text-md font-medium transition-colors duration-200 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-4 sm:px-5 py-2 sm:py-3 bg-blue-600 text-white rounded-full text-sm xl:text-md font-medium hover:bg-blue-700 transition-colors duration-200"
            aria-label="Contact Us"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Hamburger for Mobile/Tablet */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <div 
        className={`lg:hidden w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center py-6 gap-4 text-gray-700 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            aria-label="Contact Us"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;