import Head from 'next/head';
import { useContext } from 'react';

import SectionLayout from '../components/sectionLayout';
import Layout from '../components/layout';
import PriceCard from '../components/priceCard';

import WhiteBoard from '../public/images/mobile-whiteboard.svg';
import NimbelCertified from '../public/images/nimbel-certified.svg';

import { LanguageContext } from '../context/language';
import IconBox from '../components/iconBox';
import TrainingTopics from '../lib/training-topics';
import TrainingPacks from '../lib/trainingPacks';

export default function Training() {
  const { getTranslation } = useContext(LanguageContext);

  const Header = () => (
    <SectionLayout
      className="bg-black text-white"
      style={{
        background:
          'url("images/training-bg.webp"), url("images/training-bg.jp2")',
        backgroundSize: 'contain'
      }}
    >
      <div className="grid md:grid-cols-2 md:m-10">
        <h1 className="self-center justify-self-center md:justify-self-start mb-5 md:mb-0 text-4xl">
          {getTranslation('[Training Programs]')}
        </h1>
        <WhiteBoard />
      </div>
    </SectionLayout>
  );

  const Modules = () => (
    <>
      <div className="text-center mt-20 mb-10">
        <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          {getTranslation('[Design your own training program]')}
        </h2>
        <p className="text-base leading-relaxed w-5/6 lg:w-2/3 mx-auto">
          {getTranslation('[Training desc]')}
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex" />
        </div>
      </div>
      <SectionLayout className="bg-white text-black">
        <div className="grid gap-10 md:gap-20 md:grid-cols-2 lg:grid-cols-3 xl:mr-20 xl:ml-20">
          {TrainingTopics().map(topic => (
            <IconBox
              key={topic.title}
              icon={topic.icon}
              title={topic.title}
              desc={topic.desc}
              link={topic.link}
              regularPrice={topic.regularPrice}
              specialOffer={topic.specialOffer}
              offerText={topic.offerText}
            />
          ))}
        </div>
      </SectionLayout>
    </>
  );

  const NimbelCertifiedSection = () => (
    <div className="text-center bg-black text-white flex flex-col items-center">
      <h2 className="sm:text-3xl text-2xl font-medium title-font text-white my-8">
        {getTranslation('[Get your certificate]')}
      </h2>
      <div className="w-1/4">
        <NimbelCertified />
      </div>
      <div className="text-justify p-4 md:px-8 md:my-8 md:w-2/3">
        <p className="my-4">{getTranslation('[Get your certificate desc]')}</p>
        <p className="my-4">
          {getTranslation('[Get your certificate desc 2]')}
        </p>
      </div>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex" />
      </div>
    </div>
  );

  const Pricing = () => (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="px-5 py-24">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Packs
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {getTranslation('[Packs desc]')}
          </p>
        </div>
        <div className="flex justify-center flex-wrap">
          {TrainingPacks().map(pack => (
            <PriceCard pack={pack} />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <Layout>
      <Head>
        <title>Training - Nimbel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Modules />
      <NimbelCertifiedSection />
      <Pricing />
    </Layout>
  );
}
