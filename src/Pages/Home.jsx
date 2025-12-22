import React from "react";
import { useEffect } from "react";
import BackgroundIMG from "../assets/images/Screenshot 2025-05-14 182854.png";
import HeroBanner from "../assets/images/Home/newsize.jpg";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";
import Workprocess from "../components/Workprocess";
import StrengthInNumber from "../components/StrengthInNumber";
import Contactus from "../components/Contactus";
import Testimonial from "../components/Testimonial";
import BlogComponent from "../components/BlogComponent";
import Navbar from "../components/Navbar";
import HeroSectionHome from "../components/Herosectionhome";
import FAQ from "../components/FQA";
import NavForOther from "../components/NavForOther";
import { Helmet } from "react-helmet-async";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Animation duration in ms
  //     once: true, // Whether animation should happen only once
  //   });
  // }, []);
  return (
    <div>
      <Helmet>
        <title>Best Digital Marketing Agency in Delhi ncr | Risezonic.</title>
        <meta
          name="description"
          content="Risezonic is an affordable digital marketing agency in Delhi NCR. offering expert SEO, social media, PPC, ads, and web solutions to help your business growth."
        />
        <meta
          name="keywords"
          content="Best Digital Marketing Agency in Delhi ncr "
        />
        <meta
          property="og:title"
          content="Best Digital Marketing Agency in Delhi ncr | Risezonic."
        />
        <meta
          property="og:description"
          content="Risezonic is an affordable digital marketing agency in Delhi NCR. offering expert SEO, social media, PPC, ads, and web solutions to help your business growth."
        />
        <link rel="canonical" href="https://www.risezonic.com/" />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Risezonic",
          "image": "https://www.risezonic.com/assets/risezonic%20logo%20(1)-DIYazAgE.png",
          "@id": "https://www.risezonic.com",
          "url": "https://www.risezonic.com",
          "telephone": "8178857250",
          "address": {
            "@type": "PostalAddress",
          "streetAddress": "RZ11/D, Upper Ground Floor Opposite Palam Metro Station Gate No 3, Palam Dwarka Road",
          "addressLocality": "Delhi",
          "postalCode": "110045",
          "addressCountry": "IN"
  },
          "geo": {
            "@type": "GeoCoordinates",
          "latitude": 28.584759,
          "longitude": 77.079077
  },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
  },
          "sameAs": [
          "https://www.facebook.com/risezonicofficial/",
          "https://x.com/risezonicLLP",
          "https://www.instagram.com/risezonicofficial/",
          "https://www.youtube.com/@risezonic",
          "https://www.linkedin.com/company/risezonic/",
          "https://in.pinterest.com/risezonicLLP/"
          ] 
}`}
        </script>


      </Helmet>
      <div className="md:flex hidden">
        <Navbar />
      </div>
      <div className="flex md:hidden">
        <NavForOther />
      </div>
      <div
        className="md:h-[920px] h-[350px] bg-center bg-cover bg-no-repeat relative md:flex hidden"
        style={{
          backgroundImage: `url(${"https://i.postimg.cc/G2nbVSbQ/Banner-1-green.jpg"})`,
        }}
      >
        <article className="absolute top-72 right-10 md:flex hidden items-center justify-center z-10">
          <section>
            <h1 className="text-8xl font-semibold font-heading">
              Best Digital Marketing
              <br />
              <span className="text-7xl font-semibold text-secondary mt-1 pt-1 font-heading">
                Agency in Delhi NCR
              </span>
            </h1>

            <p className="mt-2 pt-4 font-semibold font-body text-sm max-w-5xl">
              Risezonic is a leading digital marketing agency, distinguished by
              its creativity, accurate results and focus on results. Since we
              have won awards, we are experts in providing excellent digital
              marketing, building custom websites and apps and consulting brands
              on technology. Strengthening the combination of data-driven
              decisions, creative thoughts and strong tech knowledge allows us
              to achieve measurable results.
              <br />
              <br />
            </p>
            <div>
              <div className="flex justify-center mt-10 items-center gap-12 h-full">
                <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]">
                  <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                    <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-2">
                      <div className="flex gap-2 items-center">
                        <span className="font-semibold text-white">
                          More Details
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
      <div
        className="relative bg-center bg-cover bg-no-repeat h-[350px] md:h-[920px] md:hidden flex"
        style={{
          backgroundImage: `url("https://i.postimg.cc/G2nbVSbQ/Banner-1-green.jpg")`,
        }}
      >
        <article className="absolute inset-0 flex items-center justify-center md:justify-end px-4 md:px-10 z-10">
          <section className="text-center md:text-left max-w-4xl">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold font-heading leading-snug pt-20">
              Best Digital Marketing
              <br />
              <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold text-secondary mt-2 font-heading">
                Agency in Delhi NCR
              </span>
            </h2>

            {/* Button */}
            <div className="flex justify-center md:justify-start mt-6 md:mt-32">
              <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[3px] rounded-xl">
                <button className="group p-[3px] rounded-lg bg-gradient-to-b from-gray-700 to-gray-600 shadow-md hover:shadow-lg active:scale-95 transition-all duration-200">
                  <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-md px-4 py-2">
                    <div className="flex gap-2 items-center">
                      <span className="font-semibold text-white text-sm sm:text-base">
                        More Details
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </section>
        </article>
      </div>

      {/* <HeroSectionHome /> */}
      <HeroSection />
      <div
        className=" bg-center bg-cover py-6 bg-fixed bg-no-repeat"
        style={{
          backgroundColor: "#00a19b",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      >
        <div className="text-center py-4 relative max-w-6xl mx-auto">
          <h2 className="text-4xl text-white font-semibold font-heading pt-6">
            Our Service
          </h2>
          <span className="text-amber-600 text-4xl font-semibold absolute top-12 left-0 right-0 bottom-0 inset-0 ">
            ___________
          </span>
          <p className="text-xl pt-4 text-white font-body">
            Everything we do is based on joint effort, imagination, and getting
            the job done. As a provider of the best digital marketing services,
            we know that each company is unique and we adjust our strategies to
            meet your requirements. Paying attention to openness, we team up
            with your organization to create results that last.
          </p>
          <div className=" mt-6">
            <OurServices />
          </div>
        </div>
      </div>
      <Workprocess />
      <StrengthInNumber />
      <Contactus />
      <Testimonial />
      <FAQ />
      <BlogComponent />
    </div>
  );
}
