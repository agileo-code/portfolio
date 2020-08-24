/* eslint-disable react/no-danger */
import Layout from '../../components/layout/layout';
import SectionLayout from '../../components/sectionLayout';
import { getAllMarkDownIds, getMarkDownData } from '../../lib/markDowns';

const Project = ({ projectData }) => (
  <Layout>
    <SectionLayout>
      <h1>{projectData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </SectionLayout>
  </Layout>
);

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
