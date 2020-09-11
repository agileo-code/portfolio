/* eslint-disable react/no-danger */
import Link from 'next/link';
import { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '@chakra-ui/core';

import Layout from '../../components/layout';
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
    <Layout>
      <SectionLayout className="bg-black text-white">
        <h2>{title}</h2>
        <div className="grid gap-8 mt-8 lg:mt-0 lg:p-20 lg:gap-32 content-center items-center lg:grid-cols-2 ">
          <div className="flex flex-col items-center w-full h-full md:p-20 lg:p-0">
            <img src={icon} alt={`${title} Thumb`} />
            {url && (
              <Button
                className="my-6"
                variant="outline"
                borderColor="#00B4D8"
                rightIcon="external-link"
                _hover={{ bg: 'white', color: 'black' }}
              >
                <a href={url} target="_blank" rel="noreferrer">
                  {getTranslation('[View Demo]')}
                </a>
              </Button>
            )}
            <div>
              <ActionCallCard
                className="mt-4"
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
            <h3 className="mt-10">{getTranslation('[Technologies]')}:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-10">
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
