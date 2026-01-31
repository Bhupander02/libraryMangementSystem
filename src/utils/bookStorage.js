import { Books as mockBooks } from "./mockdata";

const STORAGE_KEY = "books";

export function getBooks() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mockBooks));
  return mockBooks;
}

export function saveBooks(books) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}
