import React from "react";

import { FaTrophy } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-white pt-20 px-5 md:px-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 space-x-8">
        {/* Left Image */}
        <div data-aos="zoom-in" className="w-full md:w-1/2 lg:flex hidden ">
          <img
            loading="lazy"
            src="https://i.postimg.cc/657y6Ch0/Image-4-2.png"
            alt="Student"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <p className="text-amber-600 font-medium text-lg mb-2">
            We Provide digital marketing solution that works
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
            Streamlined Digital Marketing <br />
            Services for br Growing Businesses
          </h2>
          <p className="text-gray-600 mb-6">
            At Risezonic, we are a Top digital marketing Agency in Delhi NCR,
            India, that is focused on data-driven tailored support for startups
            and evolving businesses, One that combines creativity and utilizing
            data to create unique and impactful SEO, social media and
            performance marketing campaigns. The built campaign is will be
            optimized in a timely manner with the expectation of providing you
            maximum return on investment, progressing sustainable growth.
            Risezonic provides trustworthy digital solutions for businesses that
            are looking to scale either locally or globally that are designed to
            your specifications.
          </p>

          {/* Award Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="text-yellow-500 lg:block hidden">
              <FaTrophy size={100} />
            </div>
            <div className="lg:block hidden">
              <h3 className="font-bold text-lg text-gray-900">
                INTERNATIONAL AWARDS 2024 <br /> WITH 8 YEARS OF EXPERIENCE
              </h3>
              <p className="text-gray-600 text-sm">
                Partner with Risezonic to transform your online presence and
                accelerate your business success.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex lg:hidden ">
            <img
              loading="lazy"
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
