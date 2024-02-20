import { configureStore } from "@reduxjs/toolkit";
import { vacanciesAPI } from "../services/vacanciesAPI";
import { rootReducer } from "./rootReducer";
import { countriesAPI } from "../services/countriesAPI";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) =>
    gDM().concat(vacanciesAPI.middleware, countriesAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
