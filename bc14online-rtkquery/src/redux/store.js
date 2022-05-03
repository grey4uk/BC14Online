import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from './rootReducer';

// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { pokemonsApi } from './pokemons/api/pokemonsApi';
import todosApi from './todo/todoApi';

const customMiddleWare = (store) => (next) => (action) => {
  console.log('state', store.getState());
  console.log('Middleware triggered:', action);
  next(action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => [
    ...defaultMiddleware(),
    customMiddleWare,
    pokemonsApi.middleware,
    todosApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

// const persistedStore = persistStore(store);
// const unitedStores = { persistedStore, store };

// export default unitedStores;
setupListeners(store.dispatch);

export { store };
