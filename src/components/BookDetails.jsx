import { useParams } from "react-router-dom";
// import { Books } from "../utils/mockdata";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearItems } from "../utils/cartSlice";
import { getBooks } from "./../utils/bookStorage";
const Books = getBooks();

export default function BookDetails() {
  const { id } = useParams();
  const book = Books.find((book) => book.id === Number(id));
  const dispatch = useDispatch();

  function handleAddBook(item) {
    dispatch(addItem(item));
  }

  function handleRemoveBook(item) {
    dispatch(removeItem(item.id));
  }

  function handleClearCart(item) {
    dispatch(clearItems(item.id));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6">
      <div className="max-w-5xl w-full bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden grid md:grid-cols-2 transition-all duration-500 hover:scale-[1.015]">
        {/* Image Section */}
        <div className="bg-gradient-to-br from-black to-gray-900 flex items-center justify-center p-8">
          <img
            src={book.coverImage}
            alt={book.title}
            className="h-[420px] w-[300px] object-cover rounded-2xl shadow-2xl ring-1 ring-white/10"
          />
        </div>

        {/* Details Section */}
        <div className="p-10 flex flex-col justify-between">
          <div>
            <h1 className="mb-3 text-4xl font-extrabold tracking-tight">
              {book.title}
            </h1>

            <p className="mb-6 text-lg text-gray-400">
              by <span className="text-white font-medium">{book.author}</span>
            </p>

            <div className="flex gap-6 mb-6 text-sm text-gray-400">
              <p>
                ⭐ <span className="text-white font-medium">{book.rating}</span>
              </p>
              <p>
                📄 <span className="text-white font-medium">{book.pages}</span>{" "}
                pages
              </p>
            </div>

            <p className="text-gray-400 leading-relaxed">{book.description}</p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4">
            <button
              className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 active:scale-95 transition-all shadow-xl"
              onClick={() => handleAddBook(book)}
            >
              🛒 Add to Cart
            </button>

            <button
              className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 active:scale-95 transition-all shadow-lg"
              onClick={() => handleRemoveBook(book)}
            >
              ➖ Remove from Cart
            </button>

            <button
              className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 active:scale-95 transition-all shadow-lg"
              onClick={() => handleClearCart(book)}
            >
              🧹 Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
