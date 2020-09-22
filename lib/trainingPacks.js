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
      buttonText: getTranslation('[Buy now]'),
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
      buttonText: getTranslation('[Buy now]'),
      extraInfo: getTranslation('[Pro extra info]')
    },
    {
      title: getTranslation('[Tailored]'),
      features: [
        'Diseña tu programa con nosotros para sacar el máximo partido de nuestros conocimientos',
        'Alcanza antes tus objetivos, no trabajes en temas que ya conoces.'
      ],
      buttonText: getTranslation('[Buy now]'),
      extraInfo: getTranslation('[Tailored extra info]')
    }
  ];
};

export default TrainingPack;
