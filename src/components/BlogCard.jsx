// src/components/BlogCard.jsx
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-xl transition hover:-translate-y-2 shadow-secondary ">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-4">{blog.title}</h2>
      <p className="text-sm text-gray-500">
        By {blog.author} on {blog.date}
      </p>
      <p className="text-gray-700 mt-2">{blog.summary}</p>
      <Link
        to={`/blog/${blog.id}`}
        className="text-primary hover:underline mt-4 inline-block"
      >
        Read More →
      </Link>
    </div>
  );
}
