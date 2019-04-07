//import createStore and ApplyMiddleware
import { createStore, applyMiddleware, compose } from "redux";
//import thunk
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
