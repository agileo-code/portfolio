import { useContext } from 'react';

import SectionLayout from '../components/sectionLayout';

import IdeaPerson from '../public/images/ideaPerson.svg';
import WhiteBoard from '../public/images/whiteboard.svg';

import { LanguageContext } from '../context/language';
import IconBox from '../components/iconBox';
import TrainingTopics from '../lib/training-topics';

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
    </>
  );
}
