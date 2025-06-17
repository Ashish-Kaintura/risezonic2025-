import React from "react";
import NewsCard from "../components/NewsCard";
import NavForOther from "../components/NavForOther";

const newsData = [
  {
    title: "Risezonic Launches New AI Services",
    category: "Press Release",
    date: "June 4, 2025",
    description:
      "Risezonic unveils a suite of AI-driven services aimed at transforming how businesses operate digitally.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-M_r7bEyuBQzUODeKwobumjZ2bnoB_uelw&s",
    featured: true,
  },
  {
    title: "Risezonic at Startup India Expo",
    category: "Event",
    date: "May 22, 2025",
    description:
      "We showcased our platform to thousands of entrepreneurs and investors at the expo.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/014/440/983/small_2x/image-icon-design-in-blue-circle-png.png",
  },
  {
    title: "Risezonic Partners with Microsoft",
    category: "News",
    date: "April 30, 2025",
    description:
      "We’ve entered a strategic alliance with Microsoft to expand cloud services for SMBs.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/014/440/983/small_2x/image-icon-design-in-blue-circle-png.png",
  },
  {
    title: "CEO Interviewed on TechCrunch Live",
    category: "Interview",
    date: "April 10, 2025",
    description:
      "Our CEO discusses Risezonic's roadmap and vision for the future on TechCrunch.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/014/440/983/small_2x/image-icon-design-in-blue-circle-png.png",
  },
];

const MediaPage = () => {
  const featured = newsData.find((item) => item.featured);
  const rest = newsData.filter((item) => !item.featured);

  return (
    <>
      <Helmet>
        <title>Risezonic News & Media | Latest Updates .</title>
        <meta
          name="description"
          content="Stay updated with the latest news, media features, and press releases from Risezonic. A leading marketing agency in Delhi."
        />
        <meta name="keywords" content="Risezonic" />
        <link
          rel="canonical "
          href="https://www.risezonic.com/news-and-media"
        />
      </Helmet>
      <NavForOther />
      <div className="pt-28">
        <div className="bg-gray-100 text-gray-800 px-6 py-10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">
              News & Media
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              Stay up to date with the latest updates, press releases, and media
              mentions about Risezonic.
            </p>

            {featured && (
              <div className="mb-12">
                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-lg shadow overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block bg-indigo-600 text-white text-xs px-3 py-1 rounded-full mb-2">
                      {featured.category}
                    </span>
                    <h2 className="text-2xl font-bold mb-2">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      {featured.date}
                    </p>
                    <p className="text-gray-700 mb-4">{featured.description}</p>
                    <button className="text-indigo-600 font-semibold hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            )}

            <h3 className="text-2xl font-semibold mb-4">Latest News</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {rest.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h4 className="font-semibold text-lg mt-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="text-sm text-gray-700 mt-2">
                    {item.description}
                  </p>
                  <button className="text-sm text-blue-600 mt-2 hover:underline">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaPage;
