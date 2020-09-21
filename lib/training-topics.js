import { useContext } from 'react';

import BasicFront from '../public/images/code-solid.svg';
import ReactIcon from '../public/images/react-brands.svg';
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
      regularPrice: 780,
      specialOffer: 460,
      offerText: getTranslation('[Only this month]')
    },
    {
      title: getTranslation('[Extreme React]'),
      desc: getTranslation('[Extreme React desc]'),
      icon: <ReactIcon />,
      regularPrice: 1600
    },
    {
      title: getTranslation('[Serverless technologies]'),
      desc: getTranslation('[Serverless technologies desc]'),
      icon: <Serverless />,
      regularPrice: 450
    },
    {
      title: getTranslation('[Mobile app development]'),
      desc: getTranslation('[Mobile app development desc]'),
      icon: <Mobile />,
      regularPrice: 1400
    },
    {
      title: getTranslation('[Serverless db]'),
      desc: getTranslation('[Serverless db desc]'),
      icon: <ServerlessDB />,
      regularPrice: 400
    },
    {
      title: getTranslation('[Motivacional training]'),
      desc: getTranslation('[Motivacional training desc]'),
      icon: <Carrot />,
      regularPrice: 650
    },
    {
      title: getTranslation('[Agile methodologies]'),
      desc: getTranslation('[Agile methodologies desc]'),
      icon: <Agile />,
      regularPrice: 590
    }
  ];
}
