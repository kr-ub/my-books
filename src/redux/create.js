import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './modules/reducer';
import thunk from 'redux-thunk';
import TokenService from '../services/TokenService';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/middlewares/saga';

export const history = createBrowserHistory();

export default function create() {
  const token = TokenService.get();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer(history),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(thunk, routerMiddleware(history), sagaMiddleware),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
