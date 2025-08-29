import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const fetcdata = "/data/blog.json"; // blog.json must be inside public/data folder

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(fetcdata);
        const data = await res.json();
        setBlogs(data.slice(0, 2)); // only latest 2 blogs
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchBlog();
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 justify-between items-center sm:flex block">
        <div className="w-2/4 border-r-4 border-gray-200 mr-2">
          <h2 className="text-8xl font-bold text-start text-gray-800 mb-10 font-heading">
            <span className="text-primary"> Latest </span> <br /> Blog <br />
            <span className="text-secondary"> Posts</span>
            <span className="text-secondary">...</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:w-[50%]">
          {blogs.map((blog, index) => {
            // format date safely
            const formattedDate = blog.updatedAt
              ? new Date(blog.updatedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "No Date";

            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/blog/${encodeURIComponent(blog.url)}`}>
                  {/* Placeholder image since JSON has no image */}
                  <img
                    loading="lazy"
                    src={blog.Image}
                    alt={blog.metatitle}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition line-clamp-3">
                      {blog.title}
                    </h3>
                    {/* <p className="text-gray-700 mt-2 line-clamp-3">
                    {blog.metadescription}
                  </p> */}
                    <p className="text-sm text-gray-500">
                      By Admin on {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-10 items-center gap-12 h-full">
        <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]">
          <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
            <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-2">
              <div className="flex gap-2 items-center">
                <Link to="/blogs">
                  <span className="font-semibold text-white">More Blogs</span>
                </Link>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
