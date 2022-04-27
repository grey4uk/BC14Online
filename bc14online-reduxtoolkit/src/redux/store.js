// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import counterReducer from './counter/counter-reducer';
// import pokemonsSlice from './pokemons/pokemonsSlice';
import rootReducer from './rootReducer';

import logger from 'redux-logger';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const persistConfig = {
//   key,
//   storage,
//   blacklist,
// };

// const persisted=persistReducer(persistConfig, pokemons)

// const store = createStore(
//   counterReducer,
//   composeWithDevTools()
// );

// const customLogger=(store,action)=>{console.log("Action",action);store.dispatch();console.log('state', store.getState())};

const store = configureStore({
  // reducer: {
  //   count: counterReducer,
  //   pokemons: pokemonsSlice,
  // },
  reducer: rootReducer,
  middleware: (defaultMiddleware) => [
    ...defaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
    logger,
  ],
});

const persistedStore = persistStore(store);
const unitedStores = { persistedStore, store };

export default unitedStores;

// devTools: process.env.NODE_ENV === "development",

// serializableCheck: {
//   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// },
