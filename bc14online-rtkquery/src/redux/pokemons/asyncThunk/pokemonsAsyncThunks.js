import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons } from 'services/pokemonApi';

export const fetchPokemons = createAsyncThunk(
  'POKEMONS_FETCH',
  async (_, thunkApi) => {
    try {
      const { data, error } = await getPokemons();
      //       console.log(
      //         'fetchPokemons state>>>',
      //         thunkApi.getState()
      //       );
      if (error) {
        console.log('ERROR IN IF>>>>>>>');
        // throw new Error();
        return thunkApi.rejectWithValue(error);
      } else {
        return data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
