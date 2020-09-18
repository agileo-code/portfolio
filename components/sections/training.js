import { useContext } from 'react';
import { Button } from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import SectionLayout from '../sectionLayout';
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
    <SectionLayout
      id="training"
      className="bg-white text-black border-t border-gray-500 border-dashed"
    >
      <h2 className="self-center mb-10">
        {getTranslation('[Training Programs]')}
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-center md:mr-10 md:ml-10">
        <div>
          <span className="text-gray-800">
            {getTranslation('[Continous learning desc]')}
          </span>
          <Bullets className="list-disc m-5 text-sm text-gray-700">
            {trainingBullets.map(bullet => (
              <li key={bullet}>{bullet}</li>
            ))}
          </Bullets>
        </div>
        <OnlineLearning className="mr-10 ml-10 w-1/2 lg:w-full" />
      </div>
      <div className="flex justify-center flex-col sm:flex-row mt-8">
        <Button
          bg="#007FA9"
          _hover={{ backgroundColor: '#006384' }}
          className="m-2 text-white"
          onClick={() => onClick(router, 'contact')}
        >
          {getTranslation('[Contact us]')}
        </Button>
        <Link href="training">
          <Button
            bg="#007FA9"
            _hover={{ backgroundColor: '#006384' }}
            className="m-2 text-white"
          >
            {getTranslation('[More info]')}
          </Button>
        </Link>
      </div>
    </SectionLayout>
  );
};

export default Expertise;

const Bullets = styled.ul`
  li {
    margin-top: 0.7rem;
  }
`;
