import { useContext } from 'react';
import Link from 'next/link';

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
      <div className="flex justify-center py-3">
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-white bg-corporative-blue border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
          >
            {getTranslation('[View Demo]')}
          </a>
        )}
        <Link href="/projects/[id]" as={`/projects/${id}`}>
          <a className="ml-4 inline-flex text-gray-800 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
            {getTranslation('[More info]')}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectBox;
