import React, { useEffect, useState } from "react";
import NavForOther from "../components/NavForOther";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";
export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // localapi
    // fetch("public/data/services.json") // adjust path if needed
    // fetch("http://localhost:5000/api/services") // adjust path if needed
    // live server
    fetch("https://risezonic2025backend.onrender.com/api/services") // adjust path if needed
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  // Loader state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://risezonic2025backend.onrender.com/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch services:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta
          name="description"
          content="services for expert tips on SEO, social media, performance marketing,website design, and the latest digital marketing trends."
        />
        <meta name="keywords" content="Digital Marketing Blog" />
        <meta
          property="og:title"
          content="Digital Marketing Blog | Risezonic."
        />
        <meta
          property="og:description"
          content="services for expert tips on SEO, social media, performance marketing,website design, and the latest digital marketing trends."
        />
        <link rel="canonical" href="https://www.risezonic.com/our-services" />
      </Helmet>
      <NavForOther />
      <section
        className="bg-center bg-cover bg-fixed py-12"
        style={{
          backgroundImage: "url('src/assets/services/counter-bg.jpg')",
        }}
      >
        <div className="pt-28 container mx-auto">
          <div className="flex justify-center py-8 text-center bg-primary text-white rounded-xl">
            <h1 className="font-heading text-5xl">Our Services</h1>
          </div>

          {/* Loader */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
             <Loader/>
            </div>
          ) : (
            // Render services dynamically
            <div className="flex flex-wrap justify-evenly p-6 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-[650px] bg-white border-2 rounded-lg shadow-lg p-4  hover:bg-[url('https://i.postimg.cc/G2nbVSbQ/Banner-1-green.jpg')]  transition-all duration-300 hover:-translate-y-2 hover:text-black hover:bg-cover hover:bg-center"
                >
                  <h2 className="text-5xl font-heading">{service.title}</h2>
                  <p className="pt-8 font-body">{service.description}</p>
                  <Link
                    to={`/our-services/${encodeURIComponent(service.url)}`}
                    className="bg-secondary text-white px-4 py-2 rounded-md mt-4
                    inline-block"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
