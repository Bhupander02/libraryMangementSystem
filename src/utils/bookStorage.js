import { Books as mockBooks } from "./mockdata";

const STORAGE_KEY = "books";

export function getBooks() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockBooks));
    return mockBooks;
  }

  const storedBooks = JSON.parse(stored);

  const storedIds = new Set(storedBooks.map((b) => b.id));
  const newMockBooks = mockBooks.filter((b) => !storedIds.has(b.id));

  if (newMockBooks.length > 0) {
    const merged = [...newMockBooks, ...storedBooks];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return merged;
  }

  return storedBooks;
}

export function saveBooks(books) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

export function resetBooks() {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}
