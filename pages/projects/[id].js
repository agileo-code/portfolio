/* eslint-disable react/no-danger */
import Link from 'next/link';
import Layout from '../../components/layout/layout';
import SectionLayout from '../../components/sectionLayout';
import { getAllMarkDownIds, getMarkDownData } from '../../lib/markDowns';

const Project = ({ projectData }) => {
  const { title, icon, contentHtml } = projectData;
  return (
    <Layout>
      <SectionLayout className="bg-black text-white">
        <h2>{title}</h2>
        <div className="grid p-20 gap-32 content-center items-center md:grid-cols-2 ">
          <div className="w-full h-full">
            <img src={icon} alt={`${title} Thumb`} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
        <div>Technologies</div>
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
