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
      className="bg-white text-black md:mr-20 md:ml-20"
    >
      <h2 className="self-center mb-10">{getTranslation('[Services]')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
        {services().map(service => (
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
  );
};

export default Expertise;
