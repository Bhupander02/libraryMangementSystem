// import { Books } from "../utils/mockdata";
import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Book from "./Book";
import { filterBookByCategory } from "../utils/bookHelper";
import { getBooks } from './../utils/bookStorage';
const Books = getBooks();

function BookList() {
  const [filteredBooks, setFilteredBooks] = useState(Books);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categoryFilterBooks = filterBookByCategory(
    filteredBooks,
    selectedCategory,
  );

  function filterSearchList(filterSearchBook) {
    setFilteredBooks(filterSearchBook);
  }

  return (
    <>
      <Search onFilter={filterSearchList} />
      <div className="h-full bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="flex justify-center mt-10">
          <div className="flex gap-4 px-6 py-4 rounded-2xl bg-gray-800/70 shadow-lg">
            {[
              "ALL",
              "science",
              "psychology",
              "drama",
              "self-help",
              "fiction",
            ].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedCategory(type)}
                className="px-4 py-2 rounded-xl bg-gray-700 text-white hover:bg-gray-600 transition"
              >
                {type.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          {categoryFilterBooks.map((data) => (
            <Link key={data.id} to={`/book/${data.id}`}>
              <Book bookDetails={data} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default BookList;
