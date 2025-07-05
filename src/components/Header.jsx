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
    <header className="w-full shadow-sm bg-white sticky top-0 z-50 font-poppins">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand Name */}
        <Link to="/" className="flex items-center gap-3 text-xl font-bold text-gray-800">
          <img src="src/assets/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-lg md:text-xl font-bold">Techno Vanam</span>
        </Link>

        {/* Desktop Navigation + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6 text-sm font-semibold text-gray-700">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-500 transition"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition"
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
        <div className="md:hidden bg-white shadow-md">
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
