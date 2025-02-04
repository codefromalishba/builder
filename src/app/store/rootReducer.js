import { combineReducers } from "@reduxjs/toolkit";
import profileSlice from "./profileSlice";
import featureSlice from "./featureSlice";

const rootReducer = combineReducers({
  profile: profileSlice,
  feature: featureSlice,
});

export default rootReducer;
