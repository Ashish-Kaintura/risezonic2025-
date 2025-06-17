import React, { useEffect, useState } from "react";
import NavForOther from "../components/NavForOther";

const categories = [
  { label: "All", value: "" },
  { label: "Sports", value: "sports" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Business", value: "business" },
  { label: "Technology", value: "technology" },
  { label: "Health", value: "health" },
  { label: "Science", value: "science" },
  { label: "World", value: "world" },
];

const DailyNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  const API_BASE =
    "https://newsdata.io/api/1/latest?apikey=pub_8bd6c4ea88694bbabe8424eae02fb12a&country=in&language=en&timezone=Asia/Kolkata";

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const url = API_BASE + (category ? `&category=${category}` : "");
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setNews(data.results || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) return <div className="text-center p-6">Loading...</div>;

  return (
    <>
    <NavForOther/>
      <div className="max-w-6xl mx-auto p-4 pt-28">
        <h2 className="text-2xl font-bold mb-6 text-center">Daily News</h2>
        <div className="flex justify-end mb-6">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-3 py-2"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg"
            >
              <img
                src={item.image_url || "https://via.placeholder.com/400x200"}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  {item.source_icon && (
                    <img
                      src={item.source_icon}
                      alt="icon"
                      className="w-5 h-5 rounded-full"
                    />
                  )}
                  <span>{item.source_name}</span>
                  <span>
                    {new Date(item.pubDate).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DailyNews;
