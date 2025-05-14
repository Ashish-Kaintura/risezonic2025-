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
} from "react-icons/fa";
import {
  AiOutlineMenuUnfold,
  AiOutlineClose,
  AiOutlineMenuFold,
} from "react-icons/ai";

export default function Navbar2() {
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
  return (
    <header>
      {/* Main Navbar */}
      <nav className="bg-white text-black px-4 py-3">
        <div className=" mx-auto flex justify-between items-center sm:px-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <img
              className="w-32"
              src="https://www.webeesocial.com/wp-content/uploads/2020/12/logo-tm-compressed.png"
              alt="logo"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex text-black items-center justify-between space-x-4 ">
            <ul className="md:flex hidden space-x-6">
              <li>
                <a href="#" className="hover:text-gray-300 text-lg">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-lg">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-lg">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 text-lg">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 text-lg">
                  News and Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 text-lg">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul className="flex space-x-6 ml-4">
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
              <a href="#" className="block hover:text-gray-300 text-lg">
                Home
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInfoCircle />
              <a href="#" className="block hover:text-gray-300 text-lg">
                About
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaServicestack />
              <a href="#" className="block hover:text-gray-300 text-lg">
                Services
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaBlog />
              <a href="#" className="block hover:text-gray-300 text-lg">
                Blogs
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="#" className="block hover:text-gray-300 text-lg">
                Contact
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaNewspaper />
              <a href="#" className="block hover:text-gray-300 text-lg">
                News And Media
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLock />
              <a href="#" className="block hover:text-gray-300 text-lg">
                Privacy Policy
              </a>
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
