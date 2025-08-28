// src/pages/BlogDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import blogs from "../.././public/data/blog.json";
import NavForOther from "../components/NavForOther";
import { Helmet } from "react-helmet-async";
export default function BlogDetail() {
  const { url } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = "../src/data/blog.json";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          // "https://risezonic2025backend.onrender.com/api/blogs"
          fetchData
        ); // Replace with your API endpoint
        const data = await res.json();
        setBlogs(data);
        const foundBlog = data.find((b) => b.url === url);
        setBlog(foundBlog);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [url]);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (!blog) return <div className="text-center p-8">Blog not found.</div>;

  return (
    <>
      <NavForOther />
      <Helmet>
        <title>{blog.metatitle}</title>
        <meta name="description" content={blog.metadescription} />
        <meta name="keywords" content={blog.metakeywords} />
        <meta property="og:title" content={blog.metatitle} />
        <meta property="og:description" content={blog.metadescription} />
        <link rel="canonical" href={blog.metacanonical} />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-8 pt-28">
        <img
          loading="lazy"
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-6">
          By {blog.author} on {blog.date}
        </p>
        <p className="text-lg leading-relaxed text-gray-800">{blog.content}</p>
      </div>
    </>
  );
}
