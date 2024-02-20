import { combineReducers } from "@reduxjs/toolkit";
import { vacanciesAPI } from "../services/vacanciesAPI";
import { countriesAPI } from "../services/countriesAPI";
import filterSlice from "./filter/filterSlice";
import favoritesSlice from "./favorites/faoritesSlices";

export const rootReducer = combineReducers({
  [vacanciesAPI.reducerPath]: vacanciesAPI.reducer,
  [countriesAPI.reducerPath]: countriesAPI.reducer,
  filters: filterSlice,
  favorites: favoritesSlice,
});
