import { useContext } from 'react';

import { LangContext } from '../i18n-nimbel';

export default function TrainingTopics() {
  const { t } = useContext(LangContext);
  return [
    {
      title: t('[Basic front-end]'),
      desc: t('[Basic front-end desc]'),
      icon: '/images/code-solid.svg',
      regularPrice: 1500,
      specialOffer: 760,
      offerText: t('[Only this month]')
    },
    {
      title: t('[Extreme React]'),
      desc: t('[Extreme React desc]'),
      icon: '/images/react-brands.svg',
      regularPrice: 2750
    },
    {
      title: t('[Jam Stack]'),
      desc: t('[Jam Stack desc]'),
      icon: '/images/nextjs-3.svg',
      regularPrice: 2900
    },
    {
      title: t('[Mobile app development]'),
      desc: t('[Mobile app development desc]'),
      icon: '/images/mobile-alt-solid.svg',
      regularPrice: 2700
    },
    {
      title: t('[AWS Cloud Services]'),
      desc: t('[AWS Cloud Services desc]'),
      icon: '/images/server-solid.svg',
      specialOffer: 1200,
      regularPrice: 2200
    },
    {
      title: t('[Serverless technologies]'),
      desc: t('[Serverless technologies desc]'),
      icon: '/images/server-solid.svg',
      regularPrice: 550
    },
    {
      title: t('[Serverless db]'),
      desc: t('[Serverless db desc]'),
      icon: '/images/database-solid.svg',
      regularPrice: 1700
    },
    {
      title: t('[Motivacional training]'),
      desc: t('[Motivacional training desc]'),
      icon: '/images/carrot-solid.svg',
      specialOffer: 970,
      regularPrice: 1950
    },
    {
      title: t('[Agile methodologies]'),
      desc: t('[Agile methodologies desc]'),
      icon: '/images/agile.svg',
      specialOffer: 770,
      regularPrice: 1750
    }
  ];
}
