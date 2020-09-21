const TrainingPack = () => [
  {
    regularPrice: 4550,
    title: 'BEGGINER',
    price: 3500,
    features: [
      'Desarrollo básico web',
      'React avanzado',
      'Introducción Plataformas serverless'
    ],
    buttonText: 'Comprar',
    extraInfo:
      'Incluida acceso a la prueba de certificación de Desarrollo básico web y React avanzado'
  },
  {
    regularPrice: 10150,
    popular: true,
    title: 'PRO',
    price: 5500,
    features: [
      'React avanzado',
      'Renderizado aplicación en servidor',
      'Introducción Plataformas serverless',
      'Desarrollo móvil',
      'Bases de datos serverles'
    ],
    buttonText: 'Comprar',
    extraInfo:
      'Incluida acceso a la prueba de certificación de React avanzado, desarrollo móvil y Bases de datos serverless'
  },
  {
    title: 'A MEDIDA',
    features: [
      'Diseña tu programa con nosotros para sacar el máximo partido de nuestros conocimientos',
      'Alcanza antes tus objetivos, no trabajes en temas que ya conoces.'
    ],
    buttonText: 'Comprar',
    extraInfo:
      'Puedes incluir los accesos las certificaciones o puedes hacer solo los módulos para adquirir los conocimientos'
  }
];

export default TrainingPack;
