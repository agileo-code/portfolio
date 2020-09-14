import { useContext } from 'react';

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
      title: getTranslation('[Multi platform development]'),
      desc: getTranslation('[Multi platform desc]'),
      icon: <PWA />
    },
    {
      title: getTranslation('[Process automation]'),
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
      link: '/training'
    },
    {
      title: getTranslation('[Rescue missions]'),
      desc: '',
      icon: <Rescue />
    }
  ];
}
