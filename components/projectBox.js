import { useContext } from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/core';

import { LanguageContext } from '../context/language';

const ProjectBox = ({ icon, title, desc, className, url, id }) => {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${className}`}
    >
      <div className="w-full h-full">
        <img src={icon} alt={`${title} Thumb`} />
      </div>
      <h3 className="m-2">{title}</h3>
      <span>{desc}</span>
      <div className="flex justify-around flex-wrap w-4/5">
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            <Button
              className="m-1"
              variant="outline"
              borderColor="#00B4D8"
              rightIcon="external-link"
              _hover={{ bg: 'white', color: 'black' }}
            >
              {getTranslation('[View Demo]')}
            </Button>
          </a>
        )}
        <Link href="/projects/[id]" as={`/projects/${id}`}>
          <Button
            className="m-1"
            variant="outline"
            borderColor="#00B4D8"
            rightIcon="view"
            _hover={{ bg: 'white', color: 'black' }}
          >
            {getTranslation('[More info]')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectBox;
