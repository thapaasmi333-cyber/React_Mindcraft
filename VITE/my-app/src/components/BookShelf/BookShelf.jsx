import BookCard from "../BookCard/BookCard";

function BookShelf({ books }) {
  return (
    <ul>
      <h2>BookShelf</h2>
      {books.map((singleBook) => (
        <BookCard key={singleBook.id} book={singleBook} />
      ))}
    </ul>
  );
}

export default BookShelf;
