import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LanguageContextProvider } from 'language/translation';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </BrowserRouter>
);
