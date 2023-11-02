import { createStore, applyMiddleware, compose } from "redux";
import newsDataReducer from "./reducers/NewsDataReducer";

import createSagaMiddleware from "redux-saga";
// eslint-disable-next-line
import * as sagas from "./saga/sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  let store = createStore(
    newsDataReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  for (let saga in sagas) {
    // eslint-disable-next-line
    sagaMiddleware.run(sagas[saga]);
  }
  return store;
}
