import { logger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import appReducers from "./reducers";
import appSagas from "./sagas";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducers);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

export const persistor = persistStore(store);

sagaMiddleware.run(appSagas);

export default store;
