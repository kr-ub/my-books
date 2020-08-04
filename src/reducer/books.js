import {
  START_LOADING,
  END_LOADING,
  START_GET_BOOKS,
  SUCCESS_GET_BOOKS,
  FAIL_GET_BOOKS,
} from "../actions";

const initState = {
  loading: false,
  books: [],
  error: null,
};

export default function books(state = initState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case START_GET_BOOKS:
      return {
        loading: true,
        books: [],
        error: null,
      };
    case SUCCESS_GET_BOOKS:
      return {
        loading: false,
        books: action.books,
        error: null,
      };
    case FAIL_GET_BOOKS:
      return {
        loading: false,
        books: [],
        error: action.error,
      };
    default:
      return state;
  }
}
