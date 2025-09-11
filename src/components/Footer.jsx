import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        {/* <div className="space-y-4">
          <div className="mb-2 bg-white">
            <img
              className="w-36"
              src="http://localhost:5173/src/assets/images/Logo/risezonic%20logo%20(1).png"
              alt="Risezonic Logo"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Risezonic is your go-to solution for elevating your website and
            dominating the digital realm, from SEO to digital marketing
            strategies.
          </p>
        </div> */}

        {/* Certificates Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Certificates</h2>
          <div className="flex space-x-3">
            <img
              loading="lazy"
              className="w-24 h-24 object-cover"
              src="https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/images/certificates/google%20certificate1.webp"
              alt="Google Certificate"
            />
            <img
              loading="lazy"
              className="w-24 h-24 object-cover"
              src="https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/images/certificates/miiscertificate.webp"
              alt="MIIS Certificate"
            />
            <img
              loading="lazy"
              className="w-24 h-24 object-cover"
              src="https://raw.githubusercontent.com/Ashish-Kaintura/risezonic2025-/main/src/images/certificates/iso9001.webp"
              alt="ISO 9001 Certificate"
            />
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <NavLink to="/" className="hover:text-white">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" className="hover:text-white">
              <li>About</li>
            </NavLink>
            <NavLink to="/services" className="hover:text-white">
              <li>Services</li>
            </NavLink>
            <NavLink to="/career" className="hover:text-white">
              <li>Career</li>
            </NavLink>
            <NavLink to="/blog" className="hover:text-white">
              <li>Blog</li>
            </NavLink>
            <NavLink to="/ai-risezonic" className="hover:text-white">
              <li>AI Risezonic</li>
            </NavLink>
            <NavLink to="/privacy-policy" className="hover:text-white">
              <li>Privacy Policy</li>
            </NavLink>
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Address</h2>
          <div className="text-sm leading-relaxed">
            <p className="mb-4">
              <strong>Risezonic:</strong> RZ11/D, Upper Ground Floor Opp. Palam
              Metro Station Gate No 3, Palam Dwarka Road, Delhi, 110045
            </p>
            <p>
              <strong>Risezonic - Awfis:</strong> 07th Floor, Gate No 3 & 4,
              Ambience Island, DLF Phase 3, NH-8, Gurugram, Haryana 122002
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6">
        {/* Social Media Links */}
        <div className="text-center space-y-4">
          <h2 className="text-lg font-semibold text-white">Follow Us</h2>
          <div className="flex justify-center space-x-6 text-xl">
            <Link
              to="https://in.pinterest.com/rajshree0012/"
              className="hover:text-white"
              aria-label="Pinterest"
            >
              <FaPinterest />
            </Link>
            <Link
              to="https://www.facebook.com/risezonicofficial"
              className="hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://twitter.com/risezonicLLP"
              className="hover:text-white"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://www.instagram.com/risezonicofficial/"
              className="hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/risezonic"
              className="hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://www.youtube.com/@risezonic"
              className="hover:text-white"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-xs text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} Risezonic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
