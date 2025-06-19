import React from "react";
import OnclickVideo from "./OnclickVideo";
import bgimage from "../assets/images/Home/service-bg.jpg";
export default function Contactus() {
  return (
    <>
      <div
        className="lg:flex justify-center items-center bg-cover bg-center bg-no-repeat h-screen bg-fixed space-x-6"
        style={{
          // backgroundImage: `url(${"src/assets/images/Home/service-bg.jpg"})`,
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <form className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center font-heading">
            Get A Free Quote
          </h2>
          <div className="flex justify-between space-x-2 font-body">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="contact">
              Contact Number
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              type="tel"
              id="contact"
              name="contact"
              placeholder="Your Contact Number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="service">
              Service
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              type="text"
              id="service"
              name="service"
              placeholder="Service Interested In"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="website">
              Website Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              type="text"
              id="website"
              name="website"
              placeholder="Your Website Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center mt-2 lg:mt-0">
          <OnclickVideo />
        </div>
      </div>
    </>
  );
}
