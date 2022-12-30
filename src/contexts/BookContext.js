import React, { createContext, useCallback } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = React.useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    setBooks(response.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://127.0.0.1:3001/books", {
      title,
    });

    const updatedBooks = [
      ...books,
      { id: response.data.id, title: response.data.title },
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://127.0.0.1:3001/books/${id}`);
    if (response.status === 200) {
      const updatedBooks = books.filter((book) => {
        return book.id !== id;
      });
      setBooks(updatedBooks);
    }
  };

  const editBookById = async (id, title) => {
    const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const valueToshare = {
    books,
    fetchBooks,
    deleteBookById,
    editBookById,
    createBook,
  };

  return (
    <BookContext.Provider value={valueToshare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;
