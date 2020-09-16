import { useContext } from 'react';

import Gears from '../public/images/gears.svg';
import PWA from '../public/images/pwa.svg';
import Advisor from '../public/images/advisor.svg';
import Speed from '../public/images/speed.svg';

import { LanguageContext } from '../context/language';

export default function Services() {
  const { getTranslation } = useContext(LanguageContext);
  return [
    {
      title: getTranslation('[Multi platform development]'),
      desc: getTranslation('[Multi platform desc]'),
      icon: <PWA />
    },
    {
      title: getTranslation('[Empieza hoy con tu nuevo proyecto]'),
      desc: getTranslation('[Empieza hoy con tu nuevo proyecto desc]'),
      icon: <Advisor />
    },
    {
      title: getTranslation('[Process automation]'),
      desc: getTranslation('[Process automation desc]'),
      icon: <Gears />
    },
    {
      title: getTranslation('[Aplicaciones de alto rendimiento]'),
      desc: getTranslation('[Aplicaciones de alto rendimiento desc]'),
      icon: <Speed />
    }
  ];
}
