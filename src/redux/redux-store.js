import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import storeReducer from "./store-reducer";
import {languageReducer} from "./language-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  storePage: storeReducer,
  languageReducer: languageReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
