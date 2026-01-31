import { useEffect, useState } from "react";
// import { Books } from "../utils/mockdata";
import { getBooks } from './../utils/bookStorage';
const Books = getBooks();


export default function Search({ onFilter }) {
  const [searchText, setSearchText] = useState("");

  //The filtering method on faster response without the use of Search Button.
  useEffect(() => {
    const filterBook = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()),
    );

    onFilter(filterBook);
  }, [searchText]);

  // The filtering method for when the Search Button is Clicked, Which isn't required but it looks impressive.
  function handleSearch() {
    const filterBook = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()),
    );

    onFilter(filterBook);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center m-4">
        <h1 className="text-4xl p-2 m-4 font-extrabold">Search Book📚 </h1>
        <div className="flex items-center rounded-2xl px-3 py-2 shadow-lg w-130">
          <input
            type="text"
            placeholder="Search for a book..."
            className=" flex-1 bg-transparent text-black placeholder-gray-400 outline-none px-3 py-2 text-lg"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="ml-2 flex items-center justify-center bg-blue-500 hover:bg-blue-600 active:scale-95 transition rounded-xl w-12 h-12 text-xl shadow-md"
          >
            🔎
          </button>
        </div>
      </div>
    </>
  );
}
