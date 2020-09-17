import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../../context/language';

const Footer = () => {
  const { getTranslation } = useContext(LanguageContext);
  return (
    <div className="bg-black text-corporative-color flex justify-between items-center p-6">
      Nimbel© {new Date().getFullYear()} Copyright, Sant Cugat del Vallès,
      Barcelona
      <div className="flex flex-col text-gray-500 text-xs">
        <Link href="privacy">
          <a rel="nofollow">{getTranslation('[Privacy policy]')}</a>
        </Link>
        <Link href="termsAndConditions">
          <a rel="nofollow">{getTranslation('[Terms of service]')}</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
