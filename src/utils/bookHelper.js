export function filterBookByCategory(books, category){
  if(!category || category === "ALL"){
    return books;
  }

  return books.filter(
    (book) => book.category === category
  );
}