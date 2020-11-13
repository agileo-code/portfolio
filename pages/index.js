import Head from 'next/head';

import MainSlide from '../components/sections/mainSlide';
import Expertise from '../components/sections/expertise';
import Projects from '../components/sections/projects';
import Layout from '../components/layout';
import { getAllMarkDownData } from '../lib/markDowns';

export default function Home({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>Nimbel - Digital cloud transformation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="At Nimbel we are expert developers of web and mobile applications. We are strongly committed to cloud, AWS, Azure and private cloud architectures."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Nimbel - Digital cloud transformation"
        />
        <meta
          property="og:description"
          content="At Nimbel we are expert developers of web and mobile applications. We are strongly committed to cloud, AWS, Azure and private cloud architectures."
        />
        <meta
          property="og:image"
          content="https://nimbel.net/images/Nimbel.png"
        />
        <meta property="og:url" content="https://nimbel.net/" />
        <meta property="og:site_name" content="Nimbel" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
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
