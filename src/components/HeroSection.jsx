import React from "react"; // Update the path as per your project structure
import { FaTrophy } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-white pt-20 px-5 md:px-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 space-x-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2 lg:flex hidden ">
          <img
            src="https://i.postimg.cc/657y6Ch0/Image-4-2.png"
            alt="Student"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <p className="text-amber-600 font-medium text-lg mb-2">
            We Provide digital solution that works
          </p>
          <h2 className="text-6xl font-bold text-gray-900 leading-snug mb-4">
            Streamlined Digital Marketing, <br /> Seamless Results
          </h2>
          <p className="text-gray-600 mb-6">
            Risezonic the best content marketing agency in delhi gives your
            brand a unified framework of digital tools made to make an impact.
            We take care that every chosen strategy in SEO, social media and
            other areas is well-connected, uses data and brings good results.
          </p>

          {/* Award Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-yellow-500 lg:block hidden">
              <FaTrophy size={100} />
            </div>
            <div className="lg:block hidden">
              <h3 className="font-bold text-lg text-gray-900">
                INTERNATIONAL AWARDS 2024 <br />
                WITH 16 YEARS OF EXPERIENCE
              </h3>
              <p className="text-gray-600 text-sm">
                Grow your business smoothly by hiring a digital marketing agency
                that mixes clarity and results
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex lg:hidden ">
            <img
              src="https://i.postimg.cc/657y6Ch0/Image-4-2.png"
              alt="Student"
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
          {/* Button */}
          <div className="flex lg:justify-start justify-center mt-10 items-center gap-12 h-full">
            <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]">
              <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-2">
                  <div className="flex gap-2 items-center">
                    <a href="/about-us">
                      <span className="font-semibold text-white">
                        Know More
                      </span>
                    </a>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
