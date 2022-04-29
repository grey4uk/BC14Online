import { createSlice } from '@reduxjs/toolkit';

import {
  fetchPokemons,
  fetchOnePokemon,
} from './pokemonsAsyncThunks';

const pokemonsAsyncSlice = createSlice({
  name: 'ASYNC_POKEMON',
  initialState: {
    loading: false,
    error: '',
    pokemons: {
      pokemons: [],
      query: '',
      pokemonImage: '',
    },
  },
  reducers: {
    setQuery: (state, action) => {
      state.pokemons.query = action.payload;
    },
  },
  extraReducers: {
    [fetchPokemons.pending]: (state, _) => {
      return { ...state, loading: true, error: '' };
    },
    [fetchPokemons.fulfilled]: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        pokemons: { ...state.pokemons, pokemons: payload },
      };
    },
    [fetchPokemons.rejected]: (state, { payload }) => {
      //       console.log('rejected payload', payload);
      return { ...state, loading: false, error: 'error' };
    },
    [fetchOnePokemon.pending]: (state, _) => {
      return { ...state, loading: true, error: '' };
    },
    [fetchOnePokemon.fulfilled]: (state, action) => {
      const { payload } = action;
      const { pokemons } = state;
      return {
        ...state,
        loading: false,
        pokemons: { ...pokemons, pokemonImage: payload },
      };
    },
    [fetchOnePokemon.rejected]: (state, _) => {
      return {
        ...state,
        loading: false,
        error: 'error for one pokemon',
      };
    },
  },
});
export const { setQuery } = pokemonsAsyncSlice.actions;
export default pokemonsAsyncSlice.reducer;
