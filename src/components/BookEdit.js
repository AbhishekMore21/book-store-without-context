import { useState, useContext } from "react";
import BookContext from "../contexts/BookContext";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BookContext);

  const handleNameChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleOnSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleNameChange} />
        <button className="button is-primary" onClick={handleOnSubmit}>
          Save
        </button>
      </form>
    </div>
  );
}
