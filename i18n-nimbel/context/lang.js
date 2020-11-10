import { createContext } from 'react';

import useTranslation from '../hook/useTranslation';

export const LangContext = createContext();

export default function LanguageProvider({
  children,
  locale,
  translations,
  push,
  route
}) {
  const { changeLanguage, getTranslation } = useTranslation(translations);

  const translate = getTranslation(locale);

  const fixedTranslate = (language, text = '', replacements = []) =>
    getTranslation(language)(text, replacements);

  const changeLocale = newLocale => {
    changeLanguage(push, route)(newLocale);
  };

  return (
    <LangContext.Provider
      value={{ t: translate, ft: fixedTranslate, cl: changeLocale }}
    >
      {children}
    </LangContext.Provider>
  );
}
