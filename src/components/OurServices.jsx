import React from "react";

const services = [
  {
    title: "Ad-management  ",
    description:
      "Get a complete analysis of your website's performance and SEO readiness.",
    img: "src/assets/images/Home/Add management.png",
  },
  {
    title: "Seo Service",
    description: "Boost your authority with high-quality, white-hat backlinks.",
    img: "src/assets/images/Home/seo services.png",
  },
  {
    title: "Social-Media-Marketing ",
    description: "Boost your authority with high-quality, white-hat backlinks.",
    img: "src/assets/images/Home/socialmediamarket.png",
  },
  {
    title: "Content-Marketing",
    description: "Boost your authority with high-quality, white-hat backlinks.",
    img: "src/assets/images/Home/content marketing.png",
  },
  {
    title: "Desgining",
    description: "Optimize your website to rank higher on search engines.",
    img: "src/assets/images/Home/Design services.png",
  },
  {
    title: "Performance marketing",
    description: "Monetize your blog or site with Amazon Affiliate strategies.",
    img: "src/assets/images/Home/performancemarketing.png",
  },
  {
    title: "App Development",
    description: "Run data-driven paid campaigns for measurable growth.",
    img: "src/assets/images/Home/app development.png",
  },
  {
    title: "website-desiging-and-development",
    description: "Reach out to influencers and partners in your niche.",
    img: "src/assets/images/Home/websitedesgineandevelopment.png",
  },
];

const OurServices = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow-lg p-6 bg-white hover:bg-amber-600 hover:text-white hover:-translate-y-4 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <div className="text-4xl mb-4 lg:w-64 h-64 overflow-hidden flex justify-center">
                <img className="w-full h-full object-contain" src={service.img} alt={service.title} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
