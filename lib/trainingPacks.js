import { useContext } from 'react';
import { LanguageContext } from '../context/language';

const TrainingPack = () => {
  const { getTranslation } = useContext(LanguageContext);
  return [
    {
      regularPrice: 4550,
      title: 'BEGGINER',
      price: 3500,
      features: [
        getTranslation('[Basic front-end]'),
        getTranslation('[Extreme React]'),
        getTranslation('[Serverless technologies]')
      ],
      buttonText: getTranslation('[Know more]'),
      extraInfo: getTranslation('[Beginner extra info]')
    },
    {
      regularPrice: 10150,
      popular: true,
      title: 'PRO',
      price: 5500,
      features: [
        getTranslation('[Extreme React]'),
        getTranslation('[Jam Stack]'),
        getTranslation('[Serverless technologies]'),
        getTranslation('[Mobile app development]'),
        getTranslation('[Serverless db]')
      ],
      buttonText: getTranslation('[Know more]'),
      extraInfo: getTranslation('[Pro extra info]')
    },
    {
      title: getTranslation('[Tailored]'),
      features: [
        getTranslation('[Tailored Feature 1]'),
        getTranslation('[Tailored Feature 2]')
      ],
      buttonText: getTranslation('[Know more]'),
      extraInfo: getTranslation('[Tailored extra info]')
    }
  ];
};

export default TrainingPack;
