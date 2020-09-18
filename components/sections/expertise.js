import { useContext } from 'react';

import SectionLayout from '../sectionLayout';
import IconBox from '../iconBox';
import services from '../../lib/services';
import { LanguageContext } from '../../context/language';

const Expertise = () => {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <SectionLayout
      id="services"
      className="bg-white text-black lg:mr-32 lg:ml-32"
    >
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          {getTranslation('[Services]')}
        </h1>
        <p className="text-base leading-relaxed w-5/6 lg:w-2/3 mx-auto">
          {getTranslation('[Equipo comprometido desc]')}
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        {services().map(service => (
          <IconBox
            className="mb-10"
            key={service.title}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
            link={service.link}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Expertise;
