import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pokemonsReducer from './pokemons/pokemonsAsyncSlice';
import counterReducer from './counter/counter-reducer';

const persistConfigPokemons = {
  key: 'pokemons',
  storage,
  blacklist: ['pokemons', 'error'],
};

const persistedReducer = persistReducer(
  persistConfigPokemons,
  pokemonsReducer
);

const rootReducer = combineReducers({
  count: counterReducer,
  pokemons: persistedReducer,
});

export default rootReducer;
