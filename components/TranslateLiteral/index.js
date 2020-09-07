import { useContext } from 'react';

import { LanguageContext } from '../../context/language';

export default function TranslateLiteral({ literal }) {
  const { getTranslation } = useContext(LanguageContext);

  return <span>{getTranslation(`[${literal}]`)}</span>;
}
