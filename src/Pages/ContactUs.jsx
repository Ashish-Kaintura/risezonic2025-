import React, { useState, useEffect } from "react";
import NavForOther from "../components/NavForOther";
import { Helmet } from "react-helmet-async";
import bgimag from "../assets/images/Home/service-bg.jpg";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Here you can send data to your backend or service like EmailJS
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact us | Risezonic - Digital Marketing Experts.</title>
        <meta
          name="description"
          content="Get in touch with a digital marketing expert at Risezonic. See how we can help boost your online presence and drive real business growth."
        />
        <meta name="keywords" content="Digital Marketing Experts." />
        <link rel="canonical" href="https://www.risezonic.com/contact-us" />
      </Helmet>

      <NavForOther />

      {/* Main container with responsive padding */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-28 py-8 sm:py-16 lg:py-28">
        {/* Header section */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-start text-gray-800 font-heading">
            Get in Touch
          </h1>
        </div>

        {/* Hero section with background */}
        <div
          className="bg-gray-100 flex items-center flex-col justify-center p-4 sm:p-6 lg:p-8 bg-fixed bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: `url(${bgimag})`,
          }}
        >
          {/* Hero text */}
          <div className="py-6 relative text-center max-w-4xl">
            <h2 className="text-center font-heading p-2 text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Coffee or Chai? <span className="text-primary">It's on us!</span>
            </h2>

            {/* Decorative line - hidden on mobile for better readability */}
            <span className="hidden sm:block absolute inset-0 right-0 left-0 top-12 sm:top-16 font-bold text-secondary text-xs sm:text-sm">
              _____________________________________
            </span>

            <p className="text-base sm:text-lg text-white text-center font-body mb-2 px-2">
              If you have any questions, feedback, or just want to say hello,
              feel free to reach out to us using the form below. We look forward
              to hearing from you!
            </p>
          </div>

          {/* Content section - responsive layout */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center w-full gap-4 lg:gap-6 p-4 max-w-7xl">
            {/* Address section */}
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full lg:max-w-2xl font-body">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-start text-gray-800">
                Delhi Office
              </h2>
              <div className="mb-4">
                <p className="font-semibold text-gray-700 mb-1">Email:</p>
                <a
                  href="mailto:info@risezonic.com"
                  className="text-primary hover:underline"
                >
                  info@risezonic.com
                </a>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-gray-700 mb-1">Address:</p>
                <p className="text-gray-600 leading-relaxed">
                  Risezonic: RZ11/D, Upper Ground Floor Opposite Palam Metro
                  Station Gate No 3, Palam Dwarka Road, Delhi, 110045
                </p>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-start text-gray-800">
                Gurugram Office
              </h2>
              <div className="mb-4">
                <p className="font-semibold text-gray-700 mb-1">Email:</p>
                <a
                  href="mailto:info@risezonic.com"
                  className="text-primary hover:underline"
                >
                  info@risezonic.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-1">Address:</p>
                <p className="text-gray-600 leading-relaxed">
                  Risezonic - Awfis, 07th Floor, Gate No 3 & 4, Ambience Island
                  DLF Phase 3, NH-8, Gurugram, Haryana 122002
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full lg:max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
                Contact Us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
