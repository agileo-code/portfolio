import MainSlide from '../components/sections/mainSlide';
import Expertise from '../components/sections/expertise';
import Projects from '../components/sections/projects';
import { getAllMarkDownData } from '../lib/markDowns';

export default function Home({ allProjectsData }) {
  return (
    <>
      <MainSlide />
      <Expertise />
      <Projects allProjectsData={allProjectsData} />
    </>
  );
}

export const getStaticProps = async () => {
  const allProjectsData = getAllMarkDownData('projects');
  return {
    props: {
      allProjectsData
    }
  };
};
