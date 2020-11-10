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
      title: t('[SEO Consultancy]'),
      desc: t('[SEO Consultancy desc]'),
      icon: '/images/chart-line-solid.svg'
    },
    {
      title: t('[Cloud Services]'),
      desc: t('[Cloud Services desc]'),
      icon: '/images/cloud-upload-alt-solid.svg'
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
