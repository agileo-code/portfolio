import { useContext } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';

import { LangContext } from '../i18n-nimbel';

const customStyles = {
  control: provided => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.2);',
    borderRadius: '0',
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
  const { locale, locales } = useRouter();

  const { t, cl } = useContext(LangContext);

  const onChangeLocale = lang => {
    const userLang = lang?.target?.value || lang?.value;
    localStorage.setItem('user-language', userLang);
    cl(userLang);
  };

  const options = locales.map(lang => ({
    value: lang,
    label: t(`[${lang}]`)
  }));

  return desktop ? (
    <Select
      components={{ IndicatorSeparator: null }}
      value={[{ value: locale, label: t(`[${locale}]`) }]}
      onChange={onChangeLocale}
      options={options}
      styles={customStyles}
      isSearchable={false}
      aria-label={t(`[Select language]`)}
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
