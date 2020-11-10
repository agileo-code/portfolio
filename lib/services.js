import { useContext } from 'react';

import Gears from '../public/images/cogs-solid.svg';
import PWA from '../public/images/desktop-solid.svg';
import Advisor from '../public/images/lightbulb-regular.svg';
import Speed from '../public/images/tachometer-alt-solid.svg';
import Cloud from '../public/images/cloud-upload-alt-solid.svg';
import SEO from '../public/images/chart-line-solid.svg'

import { LangContext } from '../i18n-nimbel';

export default function Services() {
  const { t } = useContext(LangContext);
  return [
    {
      title: t('[Empieza hoy con tu nuevo proyecto]'),
      desc: t('[Empieza hoy con tu nuevo proyecto desc]'),
      icon: <Advisor />
    },
    {
      title: t('[SEO Consultancy]'),
      desc: t('[SEO Consultancy desc]'),
      icon: <SEO />
    },
    {
      title: t('[Cloud Services]'),
      desc: t('[Cloud Services desc]'),
      icon: <Cloud />
    },
    {
      title: t('[Multi platform development]'),
      desc: t('[Multi platform desc]'),
      icon: <PWA />
    },
    {
      title: t('[Aplicaciones de alto rendimiento]'),
      desc: t('[Aplicaciones de alto rendimiento desc]'),
      icon: <Speed />
    },
    {
      title: t('[Agile development]'),
      desc: t('[Agile development desc]'),
      icon: <Gears />
    },
  ];
}
