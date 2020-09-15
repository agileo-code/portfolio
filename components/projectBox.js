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
      <h4 className="m-2">{title}</h4>
      <span>{desc}</span>
      <div className="grid gap-3 md:grid-cols-2">
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            <Button
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
