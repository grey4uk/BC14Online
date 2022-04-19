import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LanguageContextProvider } from 'language/translation';

const root = createRoot(document.getElementById('root'));

root.render(
  <LanguageContextProvider>
    <App />
  </LanguageContextProvider>
);
