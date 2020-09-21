import { useContext } from 'react';

import ProjectBox from '../projectBox';
import { LanguageContext } from '../../context/language';

export default function Projects({ allProjectsData }) {
  const { getTranslation, locale } = useContext(LanguageContext);

  return (
    <section className="text-gray-700 bg-gray-100 body-font" id="projects">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-corporative-blue" />
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              {getTranslation('[Projects]')}
            </h1>
            <p className="sm:w-3/5 text-base sm:pl-10 pl-0">
              {getTranslation('[Projects desc]')}
            </p>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {allProjectsData.map(projectData => (
            <ProjectBox
              desc={projectData[locale]?.desc}
              icon={projectData?.index?.icon}
              id={projectData.id}
              key={projectData.id}
              title={projectData[locale]?.title}
              url={projectData?.index?.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
