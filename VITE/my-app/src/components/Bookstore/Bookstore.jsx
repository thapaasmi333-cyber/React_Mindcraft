import BookShelf from "../BookShelf/BookShelf";

function BookStore({ store }) {
  return (
    <section>
      <h2>Welcome to {store.storeName}</h2>
      <BookShelf books={store.books} />
    </section>
  );
}

export default BookStore;
