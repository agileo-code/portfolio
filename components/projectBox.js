import { useContext } from 'react';

import { LanguageContext } from '../context/language';

const ProjectBox = ({ icon, title, desc, url }) => {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-center justify-center text-center border border-gray-300 p-6 rounded-lg bg-white shadow-xl">
      <div className="rounded-lg overflow-hidden">
        <img src={icon} alt={`${title} Thumb`} />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        {title}
      </h2>
      <p className="text-base mt-2">{desc}</p>
      {url && (
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className="text-blue-600 inline-flex items-center mt-3 cursor-pointer"
        >
          {getTranslation('[View Demo]')}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default ProjectBox;
