import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LanguageContextProvider from 'language/translation';
import store from 'redux/store';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <LanguageContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LanguageContextProvider>
  </BrowserRouter>
);
