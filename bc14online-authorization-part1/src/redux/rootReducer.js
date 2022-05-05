import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import pokemonsReducer from './pokemons/pokemonsSlice';
// import pokemonsReducer from './pokemons/pokemonsAsyncSlice';
import { pokemonsApi } from './pokemons/api/pokemonsApi';
import counterReducer from './counter/counter-reducer';
import pokemonQuery from './pokemons/query/querySlice';
import todosApi from './todo/todoApi';
import authSlice from './auth/authSlice';

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['auth'],
};

// const pokemons = combineReducers({
//   [pokemonsApi.reducerPath]: pokemonsApi.reducer,
//   query: pokemonQuery,
// });

const rootReducer = combineReducers({
  [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  [todosApi.reducerPath]: todosApi.reducer,
  count: counterReducer,
  query: pokemonQuery,
  auth: authSlice,
  // pokemons: pokemonsApi.reducer,
});

const persistedReducers = persistReducer(
  persistConfig,
  rootReducer
);

export default persistedReducers;
