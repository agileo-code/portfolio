import { createContext, useEffect, useState } from 'react';
import useTranslation from '@bit/dastag.utils.use-translation';

import Translations from '../lib/translations';

export const defaultLocale = 'en';
export const locales = ['ca', 'es', 'en'];
export const localesDescription = {
  ca: 'Català',
  es: 'Español',
  en: 'English'
};
export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale);
  const { changeLanguage, getTranslation } = useTranslation(
    defaultLocale,
    Translations
  );

  useEffect(() => {
    const lang =
      localStorage.getItem('user-language') ||
      navigator?.language?.split('-')[0];
    if (lang === defaultLocale || !locales.includes(lang)) return;
    setLocale(lang);
    changeLanguage(lang);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        locales,
        changeLanguage,
        getTranslation,
        localesDescription
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
