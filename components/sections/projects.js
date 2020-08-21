import SectionLayout from '../sectionLayout';
import ProjectBox from '../projectBox';

export default function Projects({ allProjectsData }) {
  return (
    <SectionLayout className="text-black">
      <h2 className="self-center mb-10">Projects</h2>
      <div className="grid gap-20 md:grid-cols-2 xl:grid-cols-4">
        {allProjectsData.map(({ id, icon, title, url }) => (
          <ProjectBox key={id} icon={icon} title={title} url={url} id={id} />
        ))}
      </div>
    </SectionLayout>
  );
}
