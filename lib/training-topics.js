import { useContext } from 'react';

import BasicFront from '../public/images/code-solid.svg';
import ReactIcon from '../public/images/react-brands.svg';
import NextIcon from '../public/images/nextjs-3.svg';
import ServerlessDB from '../public/images/database-solid.svg';
import Serverless from '../public/images/server-solid.svg';
import Carrot from '../public/images/carrot-solid.svg';
import Mobile from '../public/images/mobile-alt-solid.svg';
import Agile from '../public/images/agile.svg';
import { LanguageContext } from '../context/language';

export default function TrainingTopics() {
  const { getTranslation } = useContext(LanguageContext);
  return [
    {
      title: getTranslation('[Basic front-end]'),
      desc: getTranslation('[Basic front-end desc]'),
      icon: <BasicFront />,
      regularPrice: 1500,
      specialOffer: 760,
      offerText: getTranslation('[Only this month]')
    },
    {
      title: getTranslation('[Extreme React]'),
      desc: getTranslation('[Extreme React desc]'),
      icon: <ReactIcon />,
      regularPrice: 2750
    },
    {
      title: getTranslation('[Jam Stack]'),
      desc: getTranslation('[Jam Stack desc]'),
      icon: <NextIcon />,
      regularPrice: 2900
    },
    {
      title: getTranslation('[Serverless technologies]'),
      desc: getTranslation('[Serverless technologies desc]'),
      icon: <Serverless />,
      regularPrice: 550
    },
    {
      title: getTranslation('[Mobile app development]'),
      desc: getTranslation('[Mobile app development desc]'),
      icon: <Mobile />,
      regularPrice: 2700
    },
    {
      title: getTranslation('[Serverless db]'),
      desc: getTranslation('[Serverless db desc]'),
      icon: <ServerlessDB />,
      regularPrice: 1700
    },
    {
      title: getTranslation('[Motivacional training]'),
      desc: getTranslation('[Motivacional training desc]'),
      icon: <Carrot />,
      specialOffer: 970,
      regularPrice: 1950
    },
    {
      title: getTranslation('[Agile methodologies]'),
      desc: getTranslation('[Agile methodologies desc]'),
      icon: <Agile />,
      specialOffer: 770,
      regularPrice: 1750
    }
  ];
}
