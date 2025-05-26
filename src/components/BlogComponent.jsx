import React from "react";

const blogs = [
  {
    id: 1,
    title: "10 Tips for a Better Online Shopping Experience",
    excerpt:
      "Learn how to make the most out of your online shopping with these helpful tips for finding deals, checking reviews, and staying safe.",
    image:
      "https://www.risezonic.com/Blogs/How%20Digital%20Marketing%20help%20to%20growth%20%20Manufacturing%20Industry%20(1).webp",
    author: "Emily Stone",
    date: "May 15, 2025",
  },
  {
    id: 2,
    title: "The Rise of Sustainable E-commerce",
    excerpt:
      "Discover how online retailers are adopting eco-friendly practices and how you can support sustainable businesses.",
    image:
      "https://www.risezonic.com/Blogs/How%20is%20Al%20%20important%20for%20performance%20marketing.webp",
    author: "David Green",
    date: "May 12, 2025",
  },
];

const BlogComponent = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white  py-12">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="w-2/4 border-r-4 border-gray-200 mr-2">
          <h2 className="text-8xl font-bold text-start text-gray-800 mb-10 font-heading ">
            <span className="text-primary"> Latest </span> <br /> Blog <br />
            <span className="text-secondary"> Posts</span>
            <span className="text-secondary">...</span>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 w-[50%]">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10 items-center gap-12 h-full">
          <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]">
            <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
              <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-2">
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-white">More Bolgs</span>
                </div>
              </div>
            </button>
          </div>
        </div>
    </section>
  );
};

export default BlogComponent;
