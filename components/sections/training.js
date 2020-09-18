import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { LanguageContext } from '../../context/language';
import OnlineLearning from '../../public/images/online-learning.svg';
import { onClick } from '../Menu';

const Expertise = () => {
  const { getTranslation } = useContext(LanguageContext);
  const { router } = useRouter();

  const trainingBullets = [
    getTranslation('[training-bullet-1]'),
    getTranslation('[training-bullet-2]'),
    getTranslation('[training-bullet-3]'),
    getTranslation('[training-bullet-4]'),
    getTranslation('[training-bullet-5]'),
    getTranslation('[training-bullet-6]')
  ];

  return (
    <section
      id="training"
      className="text-gray-700 body-font p-4 md:px-8 md:py-16"
      style={{
        background: 'url("images/training-bg-3.png")',
        backgroundSize: 'cover'
      }}
    >
      <div className="container mx-auto flex p-8 md:flex-row flex-col items-center bg-white rounded-lg">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
          <OnlineLearning className="w-1/2 lg:w-full" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {getTranslation('[Training Programs]')}
          </h1>
          <p>{getTranslation('[Continous learning desc]')}</p>
          <Bullets className="list-disc m-5 mb-12 text-sm text-gray-700 text-left">
            {trainingBullets.map(bullet => (
              <li key={bullet}>{bullet}</li>
            ))}
          </Bullets>
          <div className="flex justify-end w-full">
            <button
              type="button"
              onClick={() => onClick(router, 'contact')}
              className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
            >
              {getTranslation('[Contact]')}
            </button>
            <Link href="training">
              <a
                type="button"
                className="ml-4 inline-flex text-gray-700 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg"
              >
                {getTranslation('[More info]')}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;

const Bullets = styled.ul`
  li {
    margin-top: 0.7rem;
  }
`;
