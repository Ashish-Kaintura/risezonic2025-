import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">About Us</h2>
          <p>
            Risezonic is your go-to-spot solution for all elements in the
            digital realm. Risezonic works from elevating your website to the
            top of Google rankings to putting your brand in front of the ideal
            audience. Our team of SEO experts, social media specialists, and app
            developers has the expertise to drive your online growth.
          </p>
        </div>
        <div className="flex space-x-4">
          <div>
            <img
              className="w-30 h-28 mb-2"
              src="https://www.risezonic.com/certificates/google%20certificate1.webp"
              alt=""
            />
            <img
              className="w-30 h-28 mb-2"
              src="https://www.risezonic.com/certificates/miiscertificate.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-30 h-28 mb-2"
              src="https://www.risezonic.com/certificates/iso9001.webp"
              alt=""
            />
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Services</h2>
          <ul className="space-y-2">
            <a href="/"> <li>Home</li></a>
            <a href=""> <li>About</li></a>
            <a href=""> <li>Services</li></a>
            <a href=""> <li>Career</li></a>
            <a href=""> <li>Blog</li></a>
            <a href=""> <li>Ai Risezonic</li></a>
            <a href=""> <li>Daily News</li></a>
            <a href=""> <li>What We Do</li></a>
            <a href=""> <li>Privacy Policy</li></a>
           
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Address</h2>
          Risezonic : RZ11/D, Upper Ground Floor Opposite Palam Metro Station
          Gate No 3, Palam Dwarka Road, Delhi, 110045
          <br />
          <br />
          Risezonic - Awfis, 07th Floor, Gate No 3 & 4, Ambience Island DLF
          Phase 3, NH-8, Gurugram, Haryana 122002
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
