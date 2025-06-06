// src/components/BlogCard.jsx
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  // Format the updatedAt date
  const formattedDate = new Date(blog.updatedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-xl transition hover:-translate-y-2 shadow-secondary ">
      <img
        src={blog.Image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-4">{blog.title}</h2>
      <p className="text-sm text-gray-500">
        By {blog.author} on {formattedDate}
      </p>
      <p className="text-gray-700 mt-2">{blog.summary}</p>
      <Link
        to={`/blog/${encodeURIComponent(blog.url)}`}
        className="text-primary hover:underline mt-4 inline-block"
      >
        Read More →
      </Link>
    </div>
  );
}
