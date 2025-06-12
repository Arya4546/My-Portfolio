import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-regal-900 shadow-md w-full">
      <div className="mx-auto max-w-screen-xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-white font-bold text-lg">
          <FaLaptopCode className="text-regal-500" />
          <span className="whitespace-nowrap">Arya Deep Singh</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-white font-medium">
          {navItems.map(({ id, label }) => (
            <Link
              key={id}
              to={id}
              smooth
              duration={500}
              offset={-60}
              className="hover:text-regal-400 cursor-pointer"
            >
              {label}
            </Link>
          ))}

          {/* Resume Button */}
          <a
            href="/Arya_Deep_Singh_FullStackDeveloper_resume_2025.pdf"
            download
            className="ml-4 px-4 py-2 bg-regal-500 hover:bg-regal-600 text-white rounded transition duration-300 text-sm font-semibold"
          >
            Download Resume
          </a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-regal-800 px-4 pb-4 pt-2 space-y-3 shadow-md w-full">
          {navItems.map(({ id, label }) => (
            <Link
              key={id}
              to={id}
              smooth
              duration={500}
              offset={-60}
              onClick={closeMenu}
              className="block text-white hover:text-regal-400 text-base font-medium cursor-pointer"
            >
              {label}
            </Link>
          ))}

          {/* Resume Button Mobile */}
          <a
            href="/AryaDeepSingh_Resume.pdf"
            download
            className="block w-full mt-2 text-center bg-regal-500 hover:bg-regal-600 text-white px-4 py-2 rounded font-semibold transition"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
