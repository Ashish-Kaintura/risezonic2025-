import { Link } from "react-router-dom";
import BlackLogo from "../assets/images/Logo/risezonic logo (1).png";
import React, { useState, useRef, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaBlog,
  FaNewspaper,
  FaLock,
  FaInstalod,
} from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

import { RiGalleryFill } from "react-icons/ri";
import {
  AiOutlineMenuUnfold,
  AiOutlineClose,
  AiOutlineMenuFold,
} from "react-icons/ai";
export default function NavForOther() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest("#menu-button")
      ) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  return (
    <header>
      {/* Main Navbar */}
      <nav className=" text-black px-4 py-6  bg-white border-b-4 border-slate-200 fixed top-0 w-full z-50  shadow-lg font-body">
        <div className=" mx-auto flex justify-between items-center sm:px-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link to="/">
              <img loading="lazy" className="w-52" src={BlackLogo} alt="logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex text-black items-center justify-between space-x-4 ">
            <ul className="md:flex hidden space-x-6">
              <li>
                <Link
                  to="/"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/") ? "text-amber-400 font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/about-us") ? "text-amber-400 font-semibold" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-do"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/what-we-do")
                      ? "text-amber-400 font-semibold"
                      : ""
                  }`}
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/our-services"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/our-services")
                      ? "text-amber-400 font-semibold"
                      : ""
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="https://ai.risezonic.com/"
                  target="blank"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/airisezonic")
                      ? "text-amber-400 font-semibold"
                      : ""
                  }`}
                >
                  Ai Risezonic
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/contact-us")
                      ? "text-amber-400 font-semibold"
                      : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className={`text-lg hover:text-amber-400 ${
                    isActive("/blogs") ? "text-amber-400 font-semibold" : ""
                  }`}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex">
              <button
                id="menu-button"
                onClick={() => setIsSidebarOpen(true)}
                className="cursor-pointer  hover:bg-gray-200 text-black font-bold rounded"
              >
                <AiOutlineMenuFold size={25} />
              </button>
            </ul>
          </div>
        </div>
        {/* /* Sidebar */}

        <div
          className={`fixed top-0 right-0 h-full bg-white w-64 text-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          ref={sidebarRef}
        >
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
            <button
              className="hover:bg-gray-200 p-1 rounded cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            >
              <AiOutlineMenuUnfold size={25} />
            </button>
          </div>
          <ul className="p-4 space-y-4">
            <li className="flex items-center gap-2">
              <FaHome />
              <Link to="/" className="block hover:text-amber-600 text-lg">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaInfoCircle />
              <Link
                to="/about-us"
                className="block hover:text-amber-600 text-lg"
              >
                About
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaCircleQuestion />
              <Link
                to="/what-we-do"
                className="block hover:text-amber-600 text-lg"
              >
                What We do
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaServicestack />
              <Link
                to="/our-services"
                className="block hover:text-amber-600 text-lg"
              >
                Services
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaInstalod />
              <Link
                to="https://ai.risezonic.com/"
                target="blank"
                className="block hover:text-amber-600 text-lg"
              >
                Ai Risezonic
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaBlog />
              <Link to="/blogs" className="block hover:text-amber-600 text-lg">
                Blogs
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <Link
                to="/contact-us"
                className="block hover:text-amber-600 text-lg"
              >
                Contact
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <RiGalleryFill />
              <Link
                to="/gallery"
                className="block hover:text-amber-600 text-lg"
              >
                Gallery
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaNewspaper />
              <Link
                to="/newsandmedia"
                className="block hover:text-amber-600 text-lg"
              >
                News And Media
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaLock />
              <Link
                to="/privacy-policy"
                className="block hover:text-amber-600 text-lg"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div className="fixed inset-0  bg-opacity-40 z-40 transition-opacity duration-300"></div>
        )}
      </nav>
    </header>
  );
}
