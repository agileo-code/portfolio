import { useContext } from 'react';
import Select from 'react-select';

import { LanguageContext } from '../../context/language';

const customStyles = {
  control: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    border: '0',
    color: 'currentColor',
    outline: 'none',
    width: '115px'
  }),
  singleValue: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    color: 'currentColor',
    outline: 'none'
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: 'currentColor'
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'black',
    outline: 'none',
    color: 'white'
  }),
  option: provided => ({
    ...provided,
    backgroundColor: 'black',
    ':hover': {
      backgroundColor: '#006ba1'
    }
  })
};

export default function LanguageSelector({ desktop }) {
  const {
    getTranslation,
    locale,
    setLocale,
    locales,
    localesDescription,
    changeLanguage
  } = useContext(LanguageContext);

  const onChangeLocale = lang => {
    const userLang = lang?.target?.value || lang?.value;
    localStorage.setItem('user-language', userLang);
    setLocale(userLang);
    changeLanguage(userLang);
  };

  const options = locales.map(lang => ({
    value: lang,
    label: localesDescription[lang]
  }));

  return desktop ? (
    <Select
      components={{ IndicatorSeparator: null }}
      value={[{ value: locale, label: getTranslation(`[${locale}]`) }]}
      onChange={onChangeLocale}
      options={options}
      styles={customStyles}
    />
  ) : (
    <div className="flex text-xl p-4">
      {options.map(lang => (
        <button
          key={lang.value}
          value={lang.value}
          className={`mr-2 ${
            lang.value === locale ? 'text-blue-600 font-bold' : ''
          }`}
          type="button"
          onClick={onChangeLocale}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
