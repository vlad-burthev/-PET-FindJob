import { combineReducers } from "@reduxjs/toolkit";
import { vacanciesAPI } from "../services/vacanciesAPI";

export const rootReducer = combineReducers({
  [vacanciesAPI.reducerPath]: vacanciesAPI.reducer,
});
