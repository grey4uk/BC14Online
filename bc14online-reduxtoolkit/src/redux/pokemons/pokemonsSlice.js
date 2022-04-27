import { createSlice } from '@reduxjs/toolkit';

const initialState = { query: '', pokemons: [] };

const pokemonsSlice = createSlice({
  name: 'POKEMONS',
  initialState,
  reducers: {
    setPokemons: (state, { payload }) => ({
      ...state,
      pokemons: payload,
    }),
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
  },
});

export const { setPokemons, setQuery } =
  pokemonsSlice.actions;

export default pokemonsSlice.reducer;
