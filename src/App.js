import axios from "axios";
import React from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("http://127.0.0.1:3001/books");
    setBooks(response.data);
  };

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
    if (response.status == 200) {
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

  return (
    <div className="App">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
