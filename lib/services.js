import { useContext } from 'react';

import Gears from '../public/images/cogs-solid.svg';
import PWA from '../public/images/desktop-solid.svg';
import Advisor from '../public/images/lightbulb-regular.svg';
import Speed from '../public/images/tachometer-alt-solid.svg';
import Cloud from '../public/images/cloud-upload-alt-solid.svg';
import SEO from '../public/images/chart-line-solid.svg'

import { LanguageContext } from '../context/language';

export default function Services() {
  const { getTranslation } = useContext(LanguageContext);
  return [
    {
      title: getTranslation('[Empieza hoy con tu nuevo proyecto]'),
      desc: getTranslation('[Empieza hoy con tu nuevo proyecto desc]'),
      icon: <Advisor />
    },
    {
      title: getTranslation('[SEO Consultancy]'),
      desc: getTranslation('[SEO Consultancy desc]'),
      icon: <SEO />
    },
    {
      title: getTranslation('[Cloud Services]'),
      desc: getTranslation('[Cloud Services desc]'),
      icon: <Cloud />
    },
    {
      title: getTranslation('[Multi platform development]'),
      desc: getTranslation('[Multi platform desc]'),
      icon: <PWA />
    },
    {
      title: getTranslation('[Aplicaciones de alto rendimiento]'),
      desc: getTranslation('[Aplicaciones de alto rendimiento desc]'),
      icon: <Speed />
    },
    {
      title: getTranslation('[Agile development]'),
      desc: getTranslation('[Agile development desc]'),
      icon: <Gears />
    },
  ];
}
