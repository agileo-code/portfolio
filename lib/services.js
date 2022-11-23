import { useContext } from 'react';

import { LangContext } from '../i18n-nimbel';

export default function Services() {
  const { t } = useContext(LangContext);
  return [
    {
      title: t('[Empieza hoy con tu nuevo proyecto]'),
      desc: t('[Empieza hoy con tu nuevo proyecto desc]'),
      icon: '/images/lightbulb-regular.svg'
    },
    {
      title: t('[Multi platform development]'),
      desc: t('[Multi platform desc]'),
      icon: '/images/desktop-solid.svg'
    },
    {
      title: t('[Aplicaciones de alto rendimiento]'),
      desc: t('[Aplicaciones de alto rendimiento desc]'),
      icon: '/images/tachometer-alt-solid.svg'
    },
    {
      title: t('[Agile development]'),
      desc: t('[Agile development desc]'),
      icon: '/images/cogs-solid.svg'
    }
  ];
}
