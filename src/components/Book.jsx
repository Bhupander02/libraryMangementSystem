function Book({ bookDetails }) {
  return (
    <div
      className="
        w-72
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transform
        hover:-translate-y-1
        transition-all
        duration-300
        m-6
      "
    >
      {/* Cover Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={bookDetails.coverImage}
          alt={bookDetails.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Book Info */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {bookDetails.title}
        </h2>

        <p className="text-gray-600 text-sm mb-3">
          by <span className="font-medium">{bookDetails.author}</span>
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{bookDetails.pages} pages</span>
          <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-600 font-medium">
            {bookDetails.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Book;
