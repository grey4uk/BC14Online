import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import LanguageContextProvider from 'language/translation';

import { store } from './redux/store';
// import unitedStores from './redux/store';
// const { store, persistedStore } = unitedStores;

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <LanguageContextProvider>
      <Provider store={store}>
        {/* <PersistGate
          loading={null}
          persistor={persistedStore}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </LanguageContextProvider>
  </BrowserRouter>
);
