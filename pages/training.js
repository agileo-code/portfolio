import Head from 'next/head';
import { useContext } from 'react';

import SectionLayout from '../components/sectionLayout';
import Layout from '../components/layout';

import IdeaPerson from '../public/images/ideaPerson.svg';
import WhiteBoard from '../public/images/mobile-whiteboard.svg';
import NimbelCertified from '../public/images/nimbel-certified.svg';

import { LanguageContext } from '../context/language';
import IconBox from '../components/iconBox';
import ActionCallCard from '../components/actionCallCard';
import TrainingTopics from '../lib/training-topics';

export default function Training() {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <Layout>
      <Head>
        <title>Training - Nimbel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SectionLayout className="bg-black text-white">
        <div className="grid md:grid-cols-2 mt-10">
          <div className="md:grid md:grid-rows-2 flex justify-center">
            <h2 className="self-center mb-5 md:mb-0">
              {getTranslation('[Training Programs]')}
            </h2>
            <IdeaPerson className="w-1/4 justify-self-center self-start hidden md:block" />
          </div>
          <WhiteBoard />
        </div>
      </SectionLayout>
      <div className="text-center mt-20 mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          {getTranslation('[Design your own training program]')}
        </h1>
        <p className="text-base leading-relaxed w-5/6 lg:w-2/3 mx-auto">
          {getTranslation('[Training desc]')}
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex" />
        </div>
      </div>
      <SectionLayout className="bg-white text-black">
        <h2 className="self-center mb-10">{getTranslation('[Topics]')}</h2>
        <div className="grid gap-10 md:gap-20 md:grid-cols-2 lg:grid-cols-3 xl:mr-20 xl:ml-20">
          {TrainingTopics().map(module => (
            <IconBox
              key={module.title}
              icon={module.icon}
              title={module.title}
              desc={module.desc}
              link={module.link}
              regularPrice={module.regularPrice}
              specialOffer={module.regularPrice}
            />
          ))}
        </div>
      </SectionLayout>
      <SectionLayout className="bg-black text-white border-b border-gray-500 border-dashed">
        <div className="flex flex-col items-center">
          <h3 className="mb-5 text-center">
            {getTranslation('[Get your certificate]')}
          </h3>
          <div className="w-1/3">
            <NimbelCertified />
          </div>
          <p className="mt-8">
            {getTranslation('[Get your certificate desc]')}
          </p>
          <p className="mt-2">
            {getTranslation('[Get your certificate desc 2]')}
          </p>
          <p className="mt-2">
            {getTranslation('[Get your certificate desc 3]')}
          </p>
        </div>
      </SectionLayout>
      <SectionLayout className="bg-black text-white">
        <h2 className="self-center mb-10">{getTranslation('[Options]')}</h2>
        <div className="self-center max-w-5xl grid md:grid-cols-2 md:p-10 justify-items-center text-center gap-10">
          <ActionCallCard
            title={getTranslation('[Individual]')}
            price={<h3>140€/h</h3>}
            buttonText={getTranslation('[I want it!]')}
          >
            <span>{getTranslation('[Individual option description]')}</span>
          </ActionCallCard>
          <ActionCallCard
            title={getTranslation('[Company]')}
            price={<h3>2.300€/8h</h3>}
            buttonText={getTranslation('[I want it!]')}
          >
            <span>{getTranslation('[Company option description]')}</span>
          </ActionCallCard>
        </div>
      </SectionLayout>
    </Layout>
  );
}
