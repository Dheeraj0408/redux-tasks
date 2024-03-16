// const { legacy_createStore } = require("redux");
import { legacy_createStore } from "redux";
import { countReducer } from "./reducer";


export const reduxStore = legacy_createStore(countReducer);
