import Head from 'next/head';

import BannerCookies from '../components/bannerCookies';
import MainSlide from '../components/sections/mainSlide';
import Expertise from '../components/sections/expertise';
import Projects from '../components/sections/projects';
import Training from '../components/sections/training';
import Layout from '../components/layout';
import { getAllMarkDownData } from '../lib/markDowns';

export default function Home({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>Nimbel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Nimbel" />
      </Head>
      <MainSlide />
      <Expertise />
      <Training />
      <Projects allProjectsData={allProjectsData} />
      <BannerCookies />
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
