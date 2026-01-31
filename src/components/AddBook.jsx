import React, { useState } from "react";
import { getBooks, saveBooks } from "./../utils/bookStorage";
import { useNavigate } from "react-router-dom";

const VALID_CATEGORIES = [
  "science",
  "psychology",
  "drama",
  "self-help",
  "fiction",
];

export default function AddBook() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    author: "",
    pages: "",
    category: "",
    rating: "",
    coverImage: "",
    description: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validateForm() {
    if (!form.title.trim()) return "Title is required";
    if (!form.author.trim()) return "Author is required";

    if (!form.pages || isNaN(form.pages) || Number(form.pages) <= 0)
      return "Pages must be a positive number";

    if (!VALID_CATEGORIES.includes(form.category))
      return "Category must be a valid one";

    if (!/^\d+(\.\d)?\/10$/.test(form.rating))
      return "Rating must be like 8.5/10";

    try {
      new URL(form.coverImage);
    } catch {
      return "Cover image must be a valid URL";
    }

    if (form.description.length < 20)
      return "Description must be at least 20 characters";

    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const books = getBooks();

    const newBook = {
      ...form,
      id: Date.now(),
      pages: Number(form.pages),
      publishedDate: new Date().toISOString().split("T")[0],
    };

    saveBooks([newBook, ...books]);
    navigate("/browse");
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-950 text-white px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-4"
      >
        <h1 className="text-3xl font-bold mb-4">➕ Add New Book</h1>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        {[
          ["title", "Title"],
          ["author", "Author"],
          ["pages", "Pages"],
          ["category", "Category"],
          ["rating", "Rating (e.g. 8.5/10)"],
          ["coverImage", "Cover Image URL"],
        ].map(([name, label]) => (
          <input
            key={name}
            name={name}
            placeholder={label}
            value={form[name]}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full py-3 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600 transition">
          Add Book
        </button>
      </form>
    </div>
  );
}
