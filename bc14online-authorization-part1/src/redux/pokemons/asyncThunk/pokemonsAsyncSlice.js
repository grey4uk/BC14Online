import { createSlice } from '@reduxjs/toolkit';

import { fetchPokemons } from './pokemonsAsyncThunks';

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
  },
});
export default pokemonsAsyncSlice.reducer;
