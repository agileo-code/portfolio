/* eslint-disable react/no-danger */
import Link from 'next/link';
import { useContext } from 'react';
import styled from 'styled-components';

import SectionLayout from '../../components/sectionLayout';
import ActionCallCard from '../../components/actionCallCard';
import { LanguageContext } from '../../context/language';
import { getAllMarkDownIds, getMarkDownData } from '../../lib/markDowns';
import AvailableTechnologies from '../../lib/technologies';

const Project = ({ projectData }) => {
  const { getTranslation, locale } = useContext(LanguageContext);
  const { icon, technologies, url } = projectData?.index;
  const { title, contentHtml } = projectData[locale];
  const projectTechnologies = technologies.split(' ');
  return (
    <>
      <SectionLayout className="bg-black text-white">
        <h2>{title}</h2>
        <div className="grid gap-8 mt-8 lg:mt-0 lg:p-20 lg:gap-32 content-center items-center lg:grid-cols-2 ">
          <div className="flex flex-col items-center w-full h-full md:p-20 lg:p-0">
            <img src={icon} alt={`${title} Thumb`} />
            {url && (
              <a
                className="m-2 border-2 rounded-md border-blue-500 text-white p-1 pr-3 pl-3"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {getTranslation('[View Demo]')}{' '}
                <span className="text-blue-500">⬀</span>
              </a>
            )}
            <div>
              <ActionCallCard
                className="mt-10"
                buttonText={getTranslation("[Let's talk]")}
              >
                {getTranslation('[Do you need something similar]')}
              </ActionCallCard>
            </div>
          </div>
          <div>
            <ProjectDescription
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
            <h5 className="mt-10">{getTranslation('[Technologies]')}:</h5>
            <div className="grid grid-flow-col gap-3 p-10">
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
          <a className="m-2 text-blue-600 font-bold">
            ← {getTranslation('[Back]')}
          </a>
        </Link>
      </SectionLayout>
    </>
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
  const projectData = await getMarkDownData(`projects/${params.id}`, params.id);
  return {
    props: {
      projectData
    }
  };
};

export { Project as default, getStaticPaths, getStaticProps };

const ProjectDescription = styled.div`
  ul {
    list-style: square;
    margin-left: 1rem;
    li {
      margin: 1rem 0 1rem 0;
    }
  }
  p {
    margin: 1rem 0 1rem 0;
  }
`;
