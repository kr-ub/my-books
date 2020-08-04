import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import TokenService from "./services/TokenService";

export default function create() {
  const token = TokenService.get();
  return createStore(
    reducer,
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(applyMiddleware(thunk, promise))
  );
}
