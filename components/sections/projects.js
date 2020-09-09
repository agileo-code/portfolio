import { useContext } from 'react';

import SectionLayout from '../sectionLayout';
import ProjectBox from '../projectBox';
import { LanguageContext } from '../../context/language';

export default function Projects({ allProjectsData }) {
  const { getTranslation, locale } = useContext(LanguageContext);

  return (
    <SectionLayout
      id="projects"
      className="bg-corporative-slideDark text-white"
    >
      <h2 className="self-center mb-10">{getTranslation('[Projects]')}</h2>
      <div className="grid gap-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {allProjectsData.map(projectData => (
          <ProjectBox
            key={projectData.id}
            icon={projectData?.index?.icon}
            title={projectData[locale]?.title}
            url={projectData?.index?.url}
            id={projectData.id}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
