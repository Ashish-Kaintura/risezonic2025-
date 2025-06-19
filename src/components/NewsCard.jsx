import React from "react";

const NewsCard = ({ title, date, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
