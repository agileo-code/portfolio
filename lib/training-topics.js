import { useContext } from 'react';

import BasicFront from '../public/images/code-solid.svg';
import ReactIcon from '../public/images/react-brands.svg';
import NextIcon from '../public/images/nextjs-3.svg';
import ServerlessDB from '../public/images/database-solid.svg';
import Serverless from '../public/images/server-solid.svg';
import Carrot from '../public/images/carrot-solid.svg';
import Mobile from '../public/images/mobile-alt-solid.svg';
import Agile from '../public/images/agile.svg';
import { LangContext } from '../i18n-nimbel';

export default function TrainingTopics() {
  const { t } = useContext(LangContext);
  return [
    {
      title: t('[Basic front-end]'),
      desc: t('[Basic front-end desc]'),
      icon: <BasicFront />,
      regularPrice: 1500,
      specialOffer: 760,
      offerText: t('[Only this month]')
    },
    {
      title: t('[Extreme React]'),
      desc: t('[Extreme React desc]'),
      icon: <ReactIcon />,
      regularPrice: 2750
    },
    {
      title: t('[Jam Stack]'),
      desc: t('[Jam Stack desc]'),
      icon: <NextIcon />,
      regularPrice: 2900
    },
    {
      title: t('[Mobile app development]'),
      desc: t('[Mobile app development desc]'),
      icon: <Mobile />,
      regularPrice: 2700
    },
    {
      title: t('[AWS Cloud Services]'),
      desc: t('[AWS Cloud Services desc]'),
      icon: <Serverless />,
      specialOffer: 1200,
      regularPrice: 2200
    },
    {
      title: t('[Serverless technologies]'),
      desc: t('[Serverless technologies desc]'),
      icon: <Serverless />,
      regularPrice: 550
    },
    {
      title: t('[Serverless db]'),
      desc: t('[Serverless db desc]'),
      icon: <ServerlessDB />,
      regularPrice: 1700
    },
    {
      title: t('[Motivacional training]'),
      desc: t('[Motivacional training desc]'),
      icon: <Carrot />,
      specialOffer: 970,
      regularPrice: 1950
    },
    {
      title: t('[Agile methodologies]'),
      desc: t('[Agile methodologies desc]'),
      icon: <Agile />,
      specialOffer: 770,
      regularPrice: 1750
    }
  ];
}
