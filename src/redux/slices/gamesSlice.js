import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(game => game.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { setGames, addFavorite, removeFavorite } = gamesSlice.actions;
export default gamesSlice.reducer;
