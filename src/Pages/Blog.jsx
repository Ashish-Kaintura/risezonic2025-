// src/pages/Blog.jsx
// import blogs from "../.././public/data/blog.json";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import NavForOther from "../components/NavForOther";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://risezonic2025backend.onrender.com/api/blogs"
        ); // Replace with your API endpoint
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchBlogs();
  }, []);
  // Sort blogs by createdAt (or publishedAt) descending before rendering
  const sortedBlogs = [...blogs].sort(
    (a, b) =>
      new Date(b.createdAt || b.publishedAt) -
      new Date(a.createdAt || a.publishedAt)
  );

  return (
    <>
      <NavForOther />
      <div
        className="bg-center bg-cover bg-fixed py-12"
        style={{
          backgroundImage: "url('src/assets/Blog/quote.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-8 pt-28">
          <div className="flex  p-4  rounded-xl bg-primary text-white">
            <h1 className="font-heading text-3xl">Latest Blogs</h1>
          </div>
          <br />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedBlogs.map((blog) => (
              <BlogCard key={blog.id || blog.url} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
