import { combineReducers } from "redux";
import { profileReducer } from "./profile/reducer";
import { countReducer } from "./reducer";
import { rotateReducer } from "../reducers/rotateReducer";
import { productReducer } from "./products/reducer";

export const rootReducer = combineReducers({
  ticket: countReducer,
  profile: profileReducer,
  productListing: productReducer,
  rotate: rotateReducer,
});
