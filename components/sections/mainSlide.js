import CustomerSlider from '../customerSlider';
import SectionLayout from '../sectionLayout';
import Universe from '../universe/universe';
import Logo from '../../public/images/AgileoText.svg';

const MainSlide = () => (
  <SectionLayout
    id="main"
    className="h-screen bg-corporative-slideDark text-corporative-color"
  >
    <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 content-center flex-1">
      <div className="flex flex-col items-center justify-start mt-10 lg:items-start lg:self-center lg:mt-0">
        <Logo className="w-2/5" />
        <h5>The power of latest software technology for you.</h5>
      </div>
      <Universe className="self-center" />
    </div>
    <CustomerSlider />
  </SectionLayout>
);

export default MainSlide;
