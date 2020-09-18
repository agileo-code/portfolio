import { useContext } from 'react';
import Link from 'next/link';

import { LanguageContext } from '../context/language';

const IconBox = ({ icon, title, desc, link }) => {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <div className="p-4 md:mb-0 mb-6 flex flex-col text-center items-center">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full border border-blue-500 text-blue-600 mb-5 flex-shrink-0">
        <div className="w-10 h-10 text-black">{icon}</div>
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-xl title-font font-medium mb-3">
          {title}
        </h2>
        <p className="leading-relaxed text-base text-gray-700">{desc}</p>
        {link && (
          <Link href={link}>
            <a className="mt-3 text-blue-600 inline-flex items-center">
              {getTranslation('[More info]')}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default IconBox;
