import SectionLayout from '../sectionLayout';
import IconBox from '../iconBox';
import services from '../../lib/services';

const Expertise = () => (
  <SectionLayout id="services" className="bg-gray-100 text-black">
    <h2 className="self-center mb-10">Services</h2>

    <div className="grid gap-10 md:gap-20 grid-cols-2 md:grid-cols-3">
      {services.map(service => (
        <IconBox
          key={service.title}
          icon={service.icon}
          title={service.title}
          desc={service.desc}
        />
      ))}
    </div>
  </SectionLayout>
);

export default Expertise;
