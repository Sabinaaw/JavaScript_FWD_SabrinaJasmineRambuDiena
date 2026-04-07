function BookCard({ book }) {
  return (
    <div className="card">
      <img src={book.image} alt={book.title} />
      <div className="card-body">
        <h4>{book.title}</h4>
        <p>{book.author}</p>
      </div>
    </div>
  );
}

export default BookCard;