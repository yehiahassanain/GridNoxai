import React, { useEffect, useState } from "react";
import logo from "../../assets/images/gridnox_ai_logo1.png";
import logo1 from "../../assets/images/gridnox_ai_logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl h-20 mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink to="/">
          <img
            src={isScrolled ? logo : logo1}
            className="h-30 md:h-44"
            alt="gridnox logo"
          />
        </NavLink>

        {/* Hamburger Button (Mobile) */}
        <button
          className={`md:hidden text-3xl ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul
          className={`font-medium md:flex md:space-x-8 absolute md:static left-0 w-full md:w-auto
          transition-all duration-300
          ${menuOpen ? "top-16 bg-white shadow-md" : "top-[-400px]"}
          md:bg-transparent md:shadow-none text-center `}
        >
          <li>
            <NavLink
              to="/"
              className={`block px-6 py-3 sm:text-black md:p-0 font-bold md:${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={`block px-6 py-3 sm:text-black md:p-0 font-bold md:${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={`block px-6 py-3 sm:text-black md:p-0 font-bold md:${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact-us"
              className={`block px-6 py-3 sm:text-black md:p-0 font-bold md:${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}