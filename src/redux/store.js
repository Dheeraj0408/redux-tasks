// const { legacy_createStore } = require("redux");
import { combineReducers, legacy_createStore } from "redux";
import { countReducer } from "./reducer";
import rotateReducer from "../reducers/rotateReducer";

const rootReducer = combineReducers({
  counter: countReducer,
  rotate: rotateReducer,
});

export const reduxStore = legacy_createStore(rootReducer);
