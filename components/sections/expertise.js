import SectionLayout from '../sectionLayout';
import IconBox from '../iconBox';
import services from '../../lib/services';
const Expertise = () => (
  <SectionLayout dark>
    <h2 className="self-center mb-10">Services</h2>
    <div className="grid grid-cols-4 gap-20">
      {services.map(service => (
        <IconBox
          key={service.title}
          icon={service.icon}
          title={service.title}
          desc={service.desc}
        ></IconBox>
      ))}
    </div>
  </SectionLayout>
);

export default Expertise;
