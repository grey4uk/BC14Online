import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const customMiddleWare = (store) => (next) => (action) => {
  console.log('state', store.getState());
  console.log('Middleware triggered:', action);
  next(action);
};

const store = configureStore({
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
    customMiddleWare,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

const persistedStore = persistStore(store);
const unitedStores = { persistedStore, store };

export default unitedStores;
