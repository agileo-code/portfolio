/* eslint-disable react/no-danger */
import Link from 'next/link';
import Layout from '../../components/layout/layout';
import SectionLayout from '../../components/sectionLayout';
import { getAllMarkDownIds, getMarkDownData } from '../../lib/markDowns';
import AvailableTechnologies from '../../lib/technologies';

const Project = ({ projectData }) => {
  const { title, icon, contentHtml, technologies } = projectData;
  const projectTechnologies = technologies.split(' ');
  return (
    <Layout>
      <SectionLayout className="bg-black text-white">
        <h2>{title}</h2>
        <div className="grid p-20 gap-32 content-center items-center md:grid-cols-2 ">
          <div className="w-full h-full">
            <img src={icon} alt={`${title} Thumb`} />
          </div>
          <div>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <h5 className="mt-10">Technologies:</h5>
            <div className="p-10 flex gap-3">
              {projectTechnologies.map(techId => {
                const theTech = AvailableTechnologies[techId];
                return (
                  theTech && (
                    <div key={techId}>
                      <img
                        src={theTech.icon}
                        title={theTech.name}
                        alt={theTech.name}
                        className="w-12 h-12"
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <a className="m-2 text-blue-600">← Back</a>
        </Link>
      </SectionLayout>
    </Layout>
  );
};

const getStaticPaths = async () => {
  const paths = getAllMarkDownIds('projects');
  return {
    paths,
    fallback: false
  };
};

const getStaticProps = async ({ params }) => {
  const projectData = await getMarkDownData('projects', params.id);
  return {
    props: {
      projectData
    }
  };
};

export { Project as default, getStaticPaths, getStaticProps };
