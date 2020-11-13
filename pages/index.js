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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          async
          defer
          data-website-id="ce0e9a55-fac5-4288-a50f-4798de494265"
          src="https://landind-copywriting-umami.herokuapp.com/umami.js"
        />
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
