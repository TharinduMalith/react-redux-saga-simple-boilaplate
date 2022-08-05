import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
// import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import createRootReducer from "../reducers";

import rootSaga from "../sagas";

const { createBrowserHistory } = require("history");
export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        // routerMiddleware(history), // for dispatching history actions
        sagaMiddleware,
        logger
      )
    )
  );

  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor: persistor };
}
