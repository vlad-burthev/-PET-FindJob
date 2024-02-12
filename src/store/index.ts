import { configureStore } from "@reduxjs/toolkit";
import { vacanciesAPI } from "../services/vacanciesAPI";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) => gDM().concat(vacanciesAPI.middleware),
});
