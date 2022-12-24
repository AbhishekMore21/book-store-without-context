import React from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = React.useState("");

  const handlechange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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
