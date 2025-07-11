import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    <header className="w-full bg-white sticky top-0 z-50 font-poppins ">
      {/* Container spans full width now */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo + Brand Name */}
        <Link to="/" className="flex items-center gap-3 text-xl font-bold text-gray-800">
          <img src="src/assets/logo.png" alt="Logo" className="h-10  w-auto object-contain" />
          <span className="text-lg md:text-2xl font-bold">Techno Vanam</span>
        </Link>

        {/* Desktop Navigation + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6 text-md font-medium text-gray-700">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600 transition"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="ml-4 px-5 py-3 bg-blue-600 text-white rounded-full text-md font-medium hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md w-full">
          <div className="flex flex-col items-center py-4 gap-4 text-gray-700 font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
