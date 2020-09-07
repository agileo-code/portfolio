import { useContext } from 'react';
import { useRouter } from 'next/router';
import { onMenuClick } from '../components/layout/header';

import SectionLayout from '../components/sectionLayout';

import IdeaPerson from '../public/images/ideaPerson.svg';
import WhiteBoard from '../public/images/whiteboard.svg';

import { LanguageContext } from '../context/language';
import IconBox from '../components/iconBox';
import TrainingTopics from '../lib/training-topics';

const TrainingPriceCard = ({ title, price, children, getTranslation }) => {
  const router = useRouter();
  return (
    <div className="bg-white text-gray-900 shadow-2xl rounded-lg p-4 flex flex-col justify-between items-center">
      <h3 className="mb-3">{title}</h3>
      {children}
      <div className="m-3">{price}</div>
      <button
        type="button"
        className="bg-blue-700 text-white rounded-sm p-1 pr-3 pl-3 mt-2"
        onClick={() => onMenuClick(router, 'contact')}
      >
        {getTranslation('[I want it!]')}
      </button>
    </div>
  );
};

export default function Training() {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <>
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
      <SectionLayout className="bg-white text-black border-b border-gray-500 border-dashed">
        <div className="flex flex-col items-center">
          <h3 className="mb-5 text-center">
            {getTranslation('[Design your own training program]')}
          </h3>
          <p className="text-center">{getTranslation('[Training desc]')}</p>
        </div>
      </SectionLayout>
      <SectionLayout className="bg-white text-black">
        <h2 className="self-center mb-10">{getTranslation('[Topics]')}</h2>

        <div className="grid gap-10 md:gap-20 grid-cols-2 md:grid-cols-3">
          {TrainingTopics().map(service => (
            <IconBox
              key={service.title}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              link={service.link}
            />
          ))}
        </div>
      </SectionLayout>
      <SectionLayout className="bg-black text-white">
        <h2 className="self-center mb-10">{getTranslation('[Options]')}</h2>
        <div className="self-center max-w-5xl grid md:grid-cols-2 md:p-10 justify-items-center text-center gap-10">
          <TrainingPriceCard
            title={getTranslation('[Individual]')}
            price={<h3>140€/h</h3>}
            getTranslation={getTranslation}
          >
            <span>{getTranslation('[Individual option description]')}</span>
          </TrainingPriceCard>
          <TrainingPriceCard
            title={getTranslation('[Company]')}
            price={<h3>2.300€/8h</h3>}
            getTranslation={getTranslation}
          >
            <span>{getTranslation('[Company option description]')}</span>
          </TrainingPriceCard>
        </div>
      </SectionLayout>
    </>
  );
}
