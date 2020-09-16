import { useContext } from 'react';

import BasicFront from '../public/images/technologies/basic-front.svg';
import ReactIcon from '../public/images/technologies/react.svg';
import ServerlessDB from '../public/images/technologies/serverless-db.svg';
import Serverless from '../public/images/technologies/serverless.svg';
import Carrot from '../public/images/carrot.svg';
import Mobile from '../public/images/mobile.svg';
import Agile from '../public/images/agile.svg';
import { LanguageContext } from '../context/language';

export default function TrainingTopics() {
  const { getTranslation } = useContext(LanguageContext);
  return [
    {
      title: getTranslation('[Basic front-end]'),
      desc: getTranslation('[Basic front-end desc]'),
      icon: <BasicFront />
    },
    {
      title: getTranslation('[Extreme React]'),
      desc: getTranslation('[Extreme React desc]'),
      icon: <ReactIcon />
    },
    {
      title: getTranslation('[Serverless technologies]'),
      desc: getTranslation('[Serverless technologies desc]'),
      icon: <Serverless />
    },
    {
      title: getTranslation('[Mobile app development]'),
      desc: getTranslation('[Mobile app development desc]'),
      icon: <Mobile />
    },
    {
      title: getTranslation('[Serverless db]'),
      desc: getTranslation('[Serverless db desc]'),
      icon: <ServerlessDB />
    },
    {
      title: getTranslation('[Motivacional training]'),
      desc: getTranslation('[Motivacional training desc]'),
      icon: <Carrot />
    },
    {
      title: getTranslation('[Agile methodologies]'),
      desc: getTranslation('[Agile methodologies desc]'),
      icon: <Agile />
    }
  ];
}
