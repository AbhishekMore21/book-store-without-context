import React from "react";
import BookShow from "./BookShow";

export default function BookList({ books, onDelete, onEdit }) {
  const bookList = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{bookList}</div>;
}
