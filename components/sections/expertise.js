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
      <h2 className="self-center">{getTranslation('[Services]')}</h2>
      <span className="text-center mb-10 lg:mb-24 text-gray-700">
        {getTranslation('[Equipo comprometido desc]')}
      </span>

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
