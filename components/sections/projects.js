import { useContext } from 'react';

import ProjectBox from '../projectBox';
import { LanguageContext } from '../../context/language';

export default function Projects({ allProjectsData }) {
  const { getTranslation, locale } = useContext(LanguageContext);

  return (
    <section className="text-gray-700 bg-gray-100 body-font" id="projects">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col">
          <div className="text-center mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              {getTranslation('[Projects]')}
            </h2>
            <p className="text-base leading-relaxed w-5/6 lg:w-2/3 mx-auto">
              {getTranslation('[Projects desc]')}
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex" />
            </div>
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
