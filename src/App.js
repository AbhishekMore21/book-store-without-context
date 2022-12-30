import React, { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./contexts/BookContext";

function App() {
  const { fetchBooks } = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="App">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
