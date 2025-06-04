import React, { useState } from "react";
import NavForOther from "../components/NavForOther";
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

  return (
    <>
      <NavForOther />
      <div className=" sm:p-28">
        <div>
          <h1 className="text-4xl font-bold text-start text-gray-800 mb-8 font-heading">
            Get in Touch
          </h1>
        </div>
        <div
          className=" bg-gray-100 flex items-center flex-col justify-center p-4 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${"src/assets/images/Home/service-bg.jpg"})`,
          }}
        >
          <div className="py-6 relative text-center">
            <h2 className="text-center font-heading p-2 text-4xl text-white mb-4">
              Coffee or Chai? <span className="text-primary">It's on us!</span>
            </h2>
            <span className="absolute inset-0 right-0 left-0 top-16 font-bold text-secondary">
              _____________________________________
            </span>
            <p className="text-lg text-white text-center font-body mb-2">
              If you have any questions, feedback, or just want to say hello,
              feel free to reach out to us using the form below. We look forward
              to hearing from you!
            </p>
          </div>
          <div className="lg:flex items-center lg:justify-between justify-center w-full p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full font-body">
              <h2 className="text-2xl font-bold mb-6 text-start text-gray-800">
                Address
              </h2>
              <span>info@risezonic.com</span>
              <p>
                Risezonic : RZ11/D, Upper Ground Floor Opposite Palam Metro
                Station Gate No 3, Palam Dwarka Road, Delhi, 110045
              </p>
              <br />
              <h2 className="text-2xl font-bold mb-6 text-start text-gray-800">
                Address
              </h2>
              <span>info@risezonic.com</span>
              <p>
                Risezonic - Awfis, 07th Floor, Gate No 3 & 4, Ambience Island
                DLF Phase 3, NH-8, Gurugram, Haryana 122002
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-semibold py-2 rounded-md transition"
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
