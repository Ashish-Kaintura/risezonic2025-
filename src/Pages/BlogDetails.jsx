import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavForOther from "../components/NavForOther";
import { Helmet } from "react-helmet-async";

export default function BlogDetail() {
  const { url } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlogs = async () => {
      try {
        const res = await fetch("/data/blog.json"); // ✅ Put your blog.json in public/data/
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
          src={blog.CoverImage || blog.Image} // ✅ match your JSON keys
          alt={blog.title}
          className="w-full h-[500px] object-cover rounded-xl mb-6"
        />

        <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-6">
          By {blog.author} on {new Date(blog.createdAt).toLocaleDateString()}
        </p>

        {/* ✅ Render HTML from JSON */}
        <div
          className="prose max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.longdescription }}
        />
      </div>
    </>
  );
}
