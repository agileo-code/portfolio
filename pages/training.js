import { useContext } from 'react';

import SectionLayout from '../components/sectionLayout';

import IdeaPerson from '../public/images/ideaPerson.svg';
import WhiteBoard from '../public/images/whiteboard.svg';

import { LanguageContext } from '../context/language';

export default function Training() {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <>
      <SectionLayout className="bg-black text-white items-center pt-48">
        <h2>{getTranslation('[Training Programs]')}</h2>
      </SectionLayout>
      <SectionLayout className="bg-white text-black">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <IdeaPerson className="w-1/4 ml-64" />
          </div>
          <WhiteBoard />
        </div>
      </SectionLayout>
    </>
  );
}
