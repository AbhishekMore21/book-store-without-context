import React from "react";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = React.useState(book.title);

  const handleNameChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
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
