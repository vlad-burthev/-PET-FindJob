import { createSlice } from "@reduxjs/toolkit";
import { I_Vacancy } from "../../interfaces/interface";

interface I_InitialState {
  favorites: I_Vacancy[];
  favoritesId: string[];
}

const initialState: I_InitialState = {
  favorites: [],
  favoritesId: [],
};

const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload }) => {
      if (state.favoritesId.includes(payload.id)) {
        state.favorites = state.favorites.filter((e) => e.id !== payload.id);
        state.favoritesId = state.favoritesId.filter((e) => e !== payload.id);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      } else {
        state.favorites.push(payload);
        state.favoritesId.push(payload.id);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    setFavorites: (state, { payload }) => {
      state.favorites = payload;
      payload.map((e: I_Vacancy) => state.favoritesId.push(e.id));
    },
  },
});

export default favoritesSlice.reducer;
export const { toggleFavorites, setFavorites } = favoritesSlice.actions;
