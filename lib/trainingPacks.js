import { useContext } from 'react';
import { LangContext } from '../i18n-nimbel';

const TrainingPack = () => {
  const { t } = useContext(LangContext);
  return [
    {
      regularPrice: 4550,
      title: 'BEGGINER',
      price: 3500,
      features: [
        t('[Basic front-end]'),
        t('[Extreme React]'),
        t('[Serverless technologies]')
      ],
      buttonText: t('[Know more]'),
      extraInfo: t('[Beginner extra info]')
    },
    {
      regularPrice: 10150,
      popular: true,
      title: 'PRO',
      price: 5500,
      features: [
        t('[Extreme React]'),
        t('[Jam Stack]'),
        t('[Serverless technologies]'),
        t('[Mobile app development]'),
        t('[Serverless db]')
      ],
      buttonText: t('[Know more]'),
      extraInfo: t('[Pro extra info]')
    },
    {
      title: t('[Tailored]'),
      features: [
        t('[Tailored Feature 1]'),
        t('[Tailored Feature 2]')
      ],
      buttonText: t('[Know more]'),
      extraInfo: t('[Tailored extra info]')
    }
  ];
};

export default TrainingPack;
