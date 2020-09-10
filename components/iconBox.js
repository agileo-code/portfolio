import { useContext } from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/core';

import { LanguageContext } from '../context/language';

const IconBox = ({ icon, title, desc, className, link }) => {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${className}`}
    >
      <div className="w-20 h-20">{icon}</div>
      <h4 className="m-2">{title}</h4>
      <span>{desc}</span>
      {link ? (
        <Link href={link}>
          <Button
            variant="outline"
            borderColor="#00B4D8"
            _hover={{ bg: 'black', color: 'white' }}
          >
            {getTranslation('[More info]')}
          </Button>
        </Link>
      ) : (
        <div className="h-10" />
      )}
    </div>
  );
};

export default IconBox;
