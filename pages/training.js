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

  const Header = () => (
    <SectionLayout
      className="bg-black text-white"
      style={{
        background: 'url("images/training-bg-3.png")',
        backgroundSize: 'contain'
      }}
    >
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
  );

  const Modules = () => (
    <>
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
    </>
  );

  const NimbelCertifiedSection = () => (
    <div className="text-center bg-black text-white flex flex-col items-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white my-8">
        {getTranslation('[Get your certificate]')}
      </h1>
      <div className="w-1/3">
        <NimbelCertified />
      </div>
      <div className="text-justify p-4 md:px-8 md:my-8 md:w-2/3">
        <p className="my-4">{getTranslation('[Get your certificate desc]')}</p>
        <p className="my-4">
          {getTranslation('[Get your certificate desc 2]')}
        </p>
        <p className="my-4">
          {getTranslation('[Get your certificate desc 3]')}
        </p>
      </div>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex" />
      </div>
    </div>
  );

  const Pricing = () => (
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
  );

  const Pricing2 = () => (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                START
              </h2>
              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                Free
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                </span>
                Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                </span>
                Mixtape chillwave tumeric
              </p>
              <button
                type="button"
                className="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded"
              >
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-blue-500 flex flex-col relative overflow-hidden">
              <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                PRO
              </h2>
              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$38</span>
                <span className="text-lg ml-1 font-normal text-gray-500">
                  /mo
                </span>
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                </span>
                Tumeric plaid portland
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                </span>
                Hexagon neutra unicorn
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                </span>
                Mixtape chillwave tumeric
              </p>
              <button
                type="button"
                className="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded"
              >
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
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
      <Pricing2 />
    </Layout>
  );
}
