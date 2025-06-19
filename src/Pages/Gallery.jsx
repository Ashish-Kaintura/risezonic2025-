import React from "react";
import { useEffect } from "react";
import NavForOther from "../components/NavForOther";
import { Helmet } from "react-helmet-async";
const Gallery = () => {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Risezonic Gallery | See Our Team & Event .</title>
        <meta
          name="description"
          content="Explore our gallery to see the creative work and success stories crafted by Risezonic, your trusted digital marketing services."
        />
        <meta name="keywords" content="Risezonic." />
        <link rel="canonical " href="https://www.risezonic.com/gallery" />
      </Helmet>
      <NavForOther />
      <div className="min-h-screen bg-gray-100 py-12 px-4 pt-28">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Gallery</h2>
          <p className="text-gray-600 mb-10">
            Take a look at our recent events and office moments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  loading="lazy"
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-60 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
