// src/pages/Blog.jsx
// import blogs from "../.././public/data/blog.json";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import NavForOther from "../components/NavForOther";
import { Helmet } from "react-helmet-async";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const fetchData = "/data/blog.json";
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          // "https://risezonic2025backend.onrender.com/api/blogs"
          fetchData
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Digital Marketing Blog | Risezonic.</title>
        <meta
          name="description"
          content="Explore the Risezonic digital marketing blog for expert tips on SEO, social media, performance marketing, website design, and the latest digital marketing trends."
        />
        <meta name="keywords" content="Digital Marketing Blog" />

        <link rel="canonical" href="https://www.risezonic.com/blogs" />
      </Helmet>
      <NavForOther />
      <div
        className="bg-center bg-cover bg-fixed py-12"
        style={{
          backgroundImage: "url('src/assets/Blog/quote.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-8 pt-28">
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
