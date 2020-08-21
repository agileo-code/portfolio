import CustomerSlider from '../customerSlider';
import SectionLayout from '../sectionLayout';
import Code from '../../public/images/code.svg';
import Universe from '../universe/universe';
const MainSlide = () => (
  <SectionLayout className="h-screen bg-corporative-slideLight text-corporative-color">
    <div className="grid lg:grid-cols-2 flex-1">
      <div className="self-center">
        <h1>RUSHMORE CODE</h1>
        <h5>The future is here, come in and pay for it.</h5>
        <span>Show me the money.</span>
      </div>
      <Universe className="self-center" />
    </div>
    <CustomerSlider />
  </SectionLayout>
);

export default MainSlide;
