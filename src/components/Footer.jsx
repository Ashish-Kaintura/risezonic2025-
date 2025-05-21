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
            We are a modern e-commerce platform offering quality products,
            seamless shopping experience, and fast delivery.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Services</h2>
          <ul className="space-y-2">
            <li>Online Shopping</li>
            <li>Order Tracking</li>
            <li>Customer Support</li>
            <li>Return Policy</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Address</h2>
          <p>123 Market Street</p>
          <p>City Name, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
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
