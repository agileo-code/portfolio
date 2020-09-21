import { useContext } from 'react';

import Gears from '../public/images/cogs-solid.svg';
import PWA from '../public/images/desktop-solid.svg';
import Advisor from '../public/images/lightbulb-regular.svg';
import Speed from '../public/images/tachometer-alt-solid.svg';

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
