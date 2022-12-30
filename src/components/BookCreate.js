import { useState, useContext } from "react";
import BookContext from "../contexts/BookContext";

export default function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BookContext);

  const handlechange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input className="input" onChange={handlechange} value={title} />
        <button className="button" onSubmit={onSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
