import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page in the history stack
  };

  return (
    <button
      onClick={handleBack}
      className="bg-secondary text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none"
    >
      &#8592; Back
    </button>
  );
};

export default BackButton;
