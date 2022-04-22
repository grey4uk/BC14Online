import { useState, useContext, createContext } from 'react';

import { uk } from 'language/uk';
import { en } from 'language/en';
import { ru } from 'language/ru';
import Constants from 'assets/constants';

const LanguageContext = createContext();

const languagesKeys = { uk: uk, en: en, ru: ru };

export const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState(Constants.languages.UK);
  return (
    <LanguageContext.Provider
      value={{ lang: languagesKeys[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () =>
  useContext(LanguageContext);
