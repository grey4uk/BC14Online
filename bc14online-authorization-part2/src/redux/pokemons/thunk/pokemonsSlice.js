import {
  createSlice,
  combineReducers,
} from '@reduxjs/toolkit';

const initialState = {
  query: '',
  pokemons: [],
  pokemonImage: '',
};

const errors = createSlice({
  name: 'pokemonsErrors',
  initialState: '',
  reducers: {
    setError: () => 'some error',
    resetError: () => '',
  },
});

const loader = createSlice({
  name: 'pokemonsLoader',
  initialState: false,
  reducers: {
    loadingOn: () => true,
    loadingOff: () => false,
  },
});

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
    setPokemonImage: (state, action) => ({
      ...state,
      pokemonImage: action.payload,
    }),
  },
});

export const { setPokemons, setQuery, setPokemonImage } =
  pokemonsSlice.actions;
export const { setError, resetError } = errors.actions;
export const { loadingOn, loadingOff } = loader.actions;

const combinedReducers = combineReducers({
  loading: loader.reducer,
  error: errors.reducer,
  pokemons: pokemonsSlice.reducer,
});

export default combinedReducers;
