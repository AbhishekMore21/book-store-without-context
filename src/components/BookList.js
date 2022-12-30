import { useContext } from "react";
import BookShow from "./BookShow";
import BookContext from "../contexts/BookContext";

export default function BookList() {
  const { books } = useContext(BookContext);

  const bookList = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{bookList}</div>;
}
