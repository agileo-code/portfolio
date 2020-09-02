import { createContext, useEffect, useState } from 'react';
import useTranslation from '@bit/dastag.utils.use-translation';

import Translations from '../lib/translations';

export const defaultLocale = 'ca';
export const locales = ['ca', 'es', 'en'];
export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale);
  const { changeLanguage, getTranslation } = useTranslation(
    defaultLocale,
    Translations
  );

  useEffect(() => {
    // TODO detect here the browser language
    // setLocale('en');
    // changeLanguage('en');
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, locales, changeLanguage, getTranslation }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
