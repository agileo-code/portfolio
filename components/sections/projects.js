import { useContext } from 'react';

import SectionLayout from '../sectionLayout';
import ProjectBox from '../projectBox';
import { LanguageContext } from '../../context/language';

export default function Projects({ allProjectsData }) {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <SectionLayout
      id="projects"
      className="bg-corporative-slideDark text-white"
    >
      <h2 className="self-center mb-10">{getTranslation('[Projects]')}</h2>
      <div className="grid gap-20 md:grid-cols-3">
        {allProjectsData.map(({ id, icon, title, url }) => (
          <ProjectBox key={id} icon={icon} title={title} url={url} id={id} />
        ))}
      </div>
    </SectionLayout>
  );
}
