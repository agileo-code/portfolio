import { useContext } from 'react';

import Code from '../public/images/code.svg';
import Mobile from '../public/images/mobile.svg';
import PWA from '../public/images/pwa.svg';
import Advisor from '../public/images/advisor.svg';
import Training from '../public/images/training.svg';
import Rescue from '../public/images/rescue.svg';

import { LanguageContext } from '../context/language';

export default function Services() {
  const { getTranslation } = useContext(LanguageContext);
  return [
    {
      title: getTranslation('[Web development]'),
      desc: '',
      icon: <Code />
    },
    {
      title: getTranslation('[Mobile applications]'),
      desc: '',
      icon: <Mobile />
    },
    {
      title: getTranslation('[Progresive web apps]'),
      desc: '',
      icon: <PWA />
    },
    {
      title: getTranslation('[Tecnology consultancy and advisory]'),
      desc: '',
      icon: <Advisor />
    },
    {
      title: getTranslation('[Training Programs]'),
      desc: '',
      icon: <Training />,
      link: '/training
    },
    {
      title: getTranslation('[Rescue missions]'),
      desc: '',
      icon: <Rescue />
    }
  ];
}
