function replace(replacements, translation, replaceStartSign, replaceEndSign) {
  let trans = translation;

  if (replacements) {
    if (Array.isArray(replacements)) {
      replacements.forEach(replacement => {
        trans = translation.replace(
          `${replaceStartSign}${replacement.label}${replaceEndSign}`,
          replacement.value
        );
      });
    } else if (replacements.label) {
      trans = translation.replace(
        `${replaceStartSign}${replacements.label}${replaceEndSign}`,
        replacements.value
      );
    }
  }
  return trans;
}

export default function useTranslation(
  translations = {},
  replaceStartSign = '{{',
  replaceEndSign = '}}'
) {
  const changeLanguage = (push, route) => newLocale => {
    push(route, route, { locale: newLocale });
  };

  const getTranslation = language => (text = '', replacements = []) => {
    const register = translations[text];
    if (typeof register === 'undefined') return text;

    let translation = register[language];
    translation = replace(
      replacements,
      translation,
      replaceStartSign,
      replaceEndSign
    );

    return translation || text;
  };

  return {
    changeLanguage,
    getTranslation
  };
}
