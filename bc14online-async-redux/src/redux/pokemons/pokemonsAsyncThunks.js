import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getPokemons,
  getPokemonByName,
} from 'services/pokemonApi';
import pokemonsSelectors from './pokemons-selector';

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

export const fetchOnePokemon = createAsyncThunk(
  'ONE_POKEMON_FETCH',
  async (_, thunkApi) => {
    const { pokemonQuerySelector } = pokemonsSelectors;
    const state = thunkApi.getState();
    console.log('state', state);
    const query = pokemonQuerySelector(state);

    const { data, error } = await getPokemonByName({
      query,
    });
    if (error) {
      return thunkApi.rejectWithValue(error);
    }
    return data;
  }
);
