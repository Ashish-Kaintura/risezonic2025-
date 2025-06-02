// src/pages/Blog.jsx
import blogs from "../.././public/data/blog.json";
import BlogCard from "../components/BlogCard";
import NavForOther from "../components/NavForOther";
export default function Blog() {
  return (
    <>
      <NavForOther />
      <div className="bg-center bg-cover bg-fixed py-12"
        style={{
          backgroundImage: "url('src/assets/Blog/quote.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-8 pt-28">
            <div className="flex  p-4  rounded-xl bg-primary text-white">
            <h1 className="font-heading text-3xl">Latest Blogs</h1>
          </div>
F
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
