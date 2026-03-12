import React, { useEffect, useState } from "react";
import Style from "./Navbar.module.css";
import logo from "../../assets/images/gridnox_ai_logo1.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-150 h-50px md:h-16 lg:h-76px flex items-center justify-between px-6 pt-4 pb-18px md:py-4 xl:px-120px transition-all duration-300 ${isScrolled ? 'bg-white  shadow-lg' : 'bg-transparent drop-shadow-lg'}`} >
        <div className="container flex justify-around items-center mx-auto py-4">
          <NavLink to="/">
            <img
              src={logo}
              className="h-40"
              alt="gridnox Logo"
            />
          </NavLink>
          <div
            className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <NavLink
                  to='/'
                  className="block font-bold py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className="block font-bold py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/services'
                  className="block font-bold py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact-us'
                  className="block font-bold py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
