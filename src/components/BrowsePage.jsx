import { Link, useParams } from "react-router-dom";
import Book from "./Book";
import { getBooks } from './../utils/bookStorage';
const Books = getBooks();

function BrowsePage() {
  const { category } = useParams();
  const categoryFilterBooks = category
    ? Books.filter((b) => b.category === category)
    : Books;

  return (
    <>
      <div className="flex justify-center items-center flex-wrap bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
          {categoryFilterBooks.map((data) => (
            <Link key={data.id} to={`/book/${data.id}`}>
              <Book bookDetails={data} />
            </Link>
          ))}

      </div>
    </>
  );
}

export default BrowsePage;
