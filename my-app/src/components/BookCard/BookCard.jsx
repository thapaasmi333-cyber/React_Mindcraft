function BookCard({ book }) {
  return (
    <li>
      {book.title} by {book.author} — ${book.price}
    </li>
  );
}
export default BookCard;
