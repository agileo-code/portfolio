import Head from 'next/head';

import useBannerCookies from '../hooks/useBannerCookies';
import MainSlide from '../components/sections/mainSlide';
import Expertise from '../components/sections/expertise';
import Projects from '../components/sections/projects';
import Layout from '../components/layout';
import { getAllMarkDownData } from '../lib/markDowns';

export default function Home({ allProjectsData }) {
  useBannerCookies();
  return (
    <Layout>
      <Head>
        <title>Nimbel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Nimbel" />
      </Head>
      <MainSlide />
      <Expertise />
      <Projects allProjectsData={allProjectsData} />
    </Layout>
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
