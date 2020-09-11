import Head from 'next/head';
import { useEffect } from 'react';
import { useToast, Button } from '@chakra-ui/core';

import MainSlide from '../components/sections/mainSlide';
import Expertise from '../components/sections/expertise';
import Projects from '../components/sections/projects';
import Layout from '../components/layout';
import { getAllMarkDownData } from '../lib/markDowns';

export default function Home({ allProjectsData }) {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: 'Esta web utiliza cookies',
      status: 'info',
      description: (
        <>
          <span className="mr-10">Prueba descripción</span>
          <Button
            className="text-blue-600 border border-white mr-2"
            variantColor="transparent"
          >
            Acceptar
          </Button>
          <Button className="border border-white" variantColor="transparent">
            Rechazar
          </Button>
        </>
      ),
      duration: null
    });
  }, []);
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
