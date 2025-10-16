import React, { useEffect, useState } from "react";
import NavForOther from "../components/NavForOther";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // ✅ Use correct path for public folder JSON
    // Place your `services.json` inside `public/data/services.json`
    fetch("/data/services.json")
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
        <title>affordable digital marketing services | Risezonic.</title>
        <meta
          name="description"
          content="Affordable digital marketing services for small businesses. Risezonic delivers result-driven SEO, PPC, SMM, and web strategies to grow your online presence."
        />
        <meta name="keywords" content=" digital marketing services " />
        <meta
          property="og:title"
          content="affordable digital marketing services | Risezonic."
        />
        <meta
          property="og:description"
          content="Affordable digital marketing services for small businesses. Risezonic delivers result-driven SEO, PPC, SMM, and web strategies to grow your online presence."
        />
        <link
          rel="canonical"
          href="https://www.risezonic.com/our-services"
        />
      </Helmet>

      <NavForOther />

      <section
        className="bg-center bg-cover bg-fixed py-12"
        style={{
          backgroundImage: "url('/assets/services/counter-bg.jpg')", // ✅ Move images to /public/assets
        }}
      >
        <div className="pt-28 max-w-7xl mx-auto">
          <div className="flex justify-center py-8 text-center bg-primary text-white rounded-xl">
            <h1 className="font-heading sm:text-5xl text-2xl ">
              Top Digital Marketing Services
            </h1>
          </div>

          {loading ? (
            <div className="max-w-7xl flex justify-center items-center py-20">
              <Loader />
            </div>
          ) : (
            <div className="flex flex-wrap justify-evenly p-6 gap-8">
              {services
                .filter((service) => service.isActive)
                .map((service, index) => (
                  <div
                    key={index}
                    className="w-[530px] bg-white border-2 rounded-lg shadow-lg p-4 hover:bg-[url('https://i.postimg.cc/G2nbVSbQ/Banner-1-green.jpg')] transition-all duration-300 hover:-translate-y-2 hover:text-black hover:bg-cover hover:bg-center"
                  >
                    <h2 className="text-4xl font-heading">{service.title}</h2>
                    <p className="pt-8 font-body line-clamp-5">
                      {service.shortdescription}
                    </p>
                    <Link
                      to={`/our-services/${encodeURIComponent(service.url)}`}
                      className="bg-secondary text-white px-4 py-2 rounded-md mt-4 inline-block"
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
