import React from 'react';
import Book from './Book';
import Clock from 'react-live-clock';

// Presentational Component
export default function BookList({ books, loading, error, getBooks, logout }) {
  React.useEffect(() => {
    getBooks();
  }, [getBooks]);
  return (
    <div className="home-body">
      <h1>HOME</h1>
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <Clock format={'YY / MM / DD / HH:mm:ss'} ticking={true} />
        <input
          type="search"
          name="search"
          id="search-input"
          placeholder="Search...(미구현)"
        />
        <i className="fas fa-search"></i>
      </form>
      <main>
        {loading && <p>로딩 중...</p>}
        {error && <p>에러다!!</p>}
        {error === null &&
          books.map((book) => (
            <Book
              key={book.bookId}
              title={book.title}
              url={book.url}
              message={book.message}
              author={book.author}
            />
          ))}
      </main>
      <p>
        <button onClick={reload}>Reload</button>
        <button onClick={logout}>Log Out</button>
      </p>
    </div>
  );

  function reload() {
    getBooks();
  }
}
