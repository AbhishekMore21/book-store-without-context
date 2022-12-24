import React from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, handleShowEdit] = React.useState(false);

  const handleEdit = () => {
    handleShowEdit(!showEdit);
  };

  const handleSubmit = (id, title) => {
    onEdit(id, title);
    handleShowEdit(!showEdit);
  };

  const handleDelete = () => {
    onDelete(book.id);
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
