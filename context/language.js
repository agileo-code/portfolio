import { createContext, useEffect, useState } from 'react';
import useTranslation from '@bit/dastag.utils.use-translation';

import Translations from '../lib/translations';

export const defaultLocale = 'en';
export const locales = [
  { value: 'ca', label: 'Catalá' },
  { value: 'es', label: 'Español' },
  { value: 'en', label: 'English' }
];
export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale);
  const { changeLanguage, getTranslation } = useTranslation(
    defaultLocale,
    Translations
  );

  useEffect(() => {
    const lang = navigator?.language?.split('-')[0];
    if (lang === defaultLocale) return;
    setLocale(lang);
    changeLanguage(lang);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, locales, changeLanguage, getTranslation }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
