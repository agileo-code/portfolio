import { useContext } from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/core';

import { LanguageContext } from '../context/language';

const IconBox = ({ icon, title, desc, className, link }) => {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <div
      className={`flex flex-col justify-between text-center md:text-left ${className}`}
    >
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-20 h-20 md:w-10 md:h-10">{icon}</div>
        <h3 className="m-2  text-gray-900">{title}</h3>
      </div>
      <span className="text-sm text-gray-700">{desc}</span>
      <div className="flex justify-center">
        {link ? (
          <Link href={link}>
            <Button
              className=""
              variant="outline"
              borderColor="#00B4D8"
              _hover={{ bg: 'black', color: 'white' }}
            >
              {getTranslation('[More info]')}
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default IconBox;
