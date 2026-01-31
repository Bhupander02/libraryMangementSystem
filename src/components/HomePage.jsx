import React from "react";
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();

  const categories = [
    "ALL",
    "science",
    "psychology",
    "drama",
    "self-help",
    "fiction",
  ];

  function handleCategoryClick(type) {
    if (type === "ALL") {
      navigate("/browse");
    } else {
      navigate(`/browse/${type}`);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        📚 Book Library Management System
      </h1>

      <p className="text-gray-400 text-lg text-center max-w-xl mb-10">
        Discover, browse, and explore books across different categories. Pick a
        category below to get started.
      </p>

      {/* Category Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {categories.map((type) => (
          <button
            key={type}
            onClick={() => handleCategoryClick(type)}
            className="
              px-6 py-3 rounded-2xl font-semibold uppercase tracking-wide
              bg-gray-700 text-white
              hover:bg-blue-500 hover:scale-105
              active:scale-95
              transition-all duration-300
              shadow-lg
            "
          >
            {type}
          </button>
        ))}
      </div>

      {/* Footer hint */}
      <p className="mt-12 text-sm text-gray-500">
        Click a category to view available books
      </p>
    </div>
  );
}

export default HomePage;
