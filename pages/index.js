import Head from 'next/head';

import Layout from '../components/layout';
import AboutUs from '../components/sections/aboutUs';
import Expertise from '../components/sections/expertise';
import MainSlide from '../components/sections/mainSlide';
import Projects from '../components/sections/projects';
import { getAllMarkDownData } from '../lib/markDowns';

export default function Home({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          async
          defer
          data-website-id="ce0e9a55-fac5-4288-a50f-4798de494265"
          src="https://landind-copywriting-umami.herokuapp.com/umami.js"
        />
        <link rel="preconnect" href="https://maps.gstatic.com" legacyBehavior />
        <link
          rel="preconnect"
          href="https://maps.googleapis.com"
          legacyBehavior
        />
      </Head>
      <MainSlide />
      <Expertise />
      <Projects allProjectsData={allProjectsData} />
      <AboutUs />
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
