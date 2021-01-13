import { userReducer } from "./reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(userReducer, { user: null }, applyMiddleware(thunk));

export default store;
