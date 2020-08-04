import React from "react";
import BookList from "../components/BookList";

import { useDispatch, useSelector } from "react-redux";
import { getBooksThunk } from "../actions";

export default function BookListContainer() {
  // mapStateToProps

  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);

  // mapDispatchToProps
  const dispatch = useDispatch();
  const getBooks = React.useCallback(async () => {
    // getBooksSaga();
    dispatch(getBooksThunk());
  }, [dispatch]);
  return (
    <BookList
      books={books}
      loading={loading}
      error={error}
      getBooks={getBooks}
    />
  );
}
