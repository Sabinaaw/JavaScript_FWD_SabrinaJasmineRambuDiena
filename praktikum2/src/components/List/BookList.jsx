import { useState, useRef } from "react";
import BookCard from "../BookCard";
import initialBooks from "../../Utils/books";

function BookList() {
  const [books, setBooks] = useState(initialBooks);

  const titleRef = useRef();
  const authorRef = useRef();
  const imageRef = useRef();

  const addBook = () => {
    const newBook = {
      id: books.length + 1,
      title: titleRef.current.value,
      author: authorRef.current.value,
      image: imageRef.current.value
    };

    setBooks([...books, newBook]);

    // reset input
    titleRef.current.value = "";
    authorRef.current.value = "";
    imageRef.current.value = "";
  };

  return (
    <>
      <div className="form">
        <input ref={titleRef} placeholder="Judul Buku" />
        <input ref={authorRef} placeholder="Author" />
        <input ref={imageRef} placeholder="Image URL" />
        <button className="btn" onClick={addBook}>
          Tambah Buku
        </button>
      </div>

      <div className="book-container">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}

export default BookList;