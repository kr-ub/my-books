//#region import
import { createActions, handleActions, createAction } from 'redux-actions';
import BookService from '../../services/BookService';
import { put, delay, select, call, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
//#endregion import

//#region public
const prefix = 'my-books/books';

const START_GET_BOOKS = `${prefix}/START_GET_BOOKS`;
const START_ADD_BOOK = `${prefix}/START_ADD_BOOK`;
const START_DELETE_BOOK = `${prefix}/START_DELETE_BOOK`;

// createActions
const { start, success, fail } = createActions(
  {
    SUCCESS: (books) => ({ books }),
  },
  'START',
  'FAIL',
  { prefix },
);

// initial state
const initialState = {
  loading: false,
  books: [],
  error: null,
};

// reducer
const reducer = handleActions(
  {
    START: () => ({
      loading: true,
      books: [],
      error: null,
    }),
    SUCCESS: (state, action) => ({
      loading: false,
      books: action.payload.books,
      error: null,
    }),
    FAIL: (state, action) => ({
      loading: false,
      books: [],
      error: action.error,
    }),
  },
  initialState,
  { prefix },
);
export default reducer;

//#endregion public

//#region get
export const startGetBooksActionCreator = createAction(START_GET_BOOKS);
export const startAddBookActionCreator = (bookInfo) => ({
  type: START_ADD_BOOK,
  payload: {
    bookInfo,
  },
});
export const startDeleteBookActionCreator = (bookId) => ({
  type: START_DELETE_BOOK,
  payload: {
    bookId,
  },
});

function* startGetBooksSaga() {
  try {
    yield put(start());
    yield delay(2000);
    const token = yield select((state) => state.auth.token);
    const books = yield call(BookService.getBooks, token);
    yield put(success(books));
  } catch (error) {
    yield put(fail(error));
  }
}
//#endregion get

//#region add
function* startAddBooksSaga(action) {
  const { bookInfo } = action.payload;
  try {
    yield put(start());
    yield delay(2000);
    const token = yield select((state) => state.auth.token);
    yield call(BookService.addBook, token, bookInfo);
    const books = yield call(BookService.addBook, token);
    yield put(success(books));
    yield put(push('/'));
  } catch (e) {
    yield put(fail(e));
  }
}
//#endregion add

//#region delete
function* startDeleteBookSaga(action) {
  const { bookId } = action.payload;
  try {
    yield put(start());
    yield delay(2000);
    const token = yield select((state) => state.auth.token);
    yield call(BookService.deleteBook, token, bookId);
    const books = yield call(BookService.deleteBook, token);
    yield put(success(books));
    yield put(push('/'));
  } catch (e) {
    yield put(fail(e));
  }
}
//#endregion delete

//#region sagabinding
export function* booksSaga() {
  yield takeEvery(START_GET_BOOKS, startGetBooksSaga);
  yield takeEvery(START_ADD_BOOK, startAddBooksSaga);
  yield takeEvery(START_DELETE_BOOK, startDeleteBookSaga);
}
//#endregion sagabinding
