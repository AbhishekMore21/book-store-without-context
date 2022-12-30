import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BookContext from "../contexts/BookContext";

export default function BookShow({ book }) {
  const [showEdit, handleShowEdit] = useState(false);
  const { deleteBookById } = useContext(BookContext);

  const handleEdit = () => {
    handleShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    handleShowEdit(!showEdit);
  };

  const handleDelete = () => {
    deleteBookById(book.id);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <div>
        <BookEdit book={book} onSubmit={handleSubmit} />
      </div>
    );
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="book-cover"
      />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
