import CustomerSlider from '../customerSlider';
import SectionLayout from '../sectionLayout';
import Universe from '../universe/universe';

const MainSlide = () => (
  <SectionLayout className="h-screen bg-corporative-slideDark text-corporative-color">
    <div className="grid lg:grid-cols-2 flex-1">
      <div className="self-center">
        <h1 className="text-6xl">
          <span className="text-blue-500">A</span>gileo {`<CODE /`}
          <span className="text-blue-500">{`>`}</span>
        </h1>
        <h5>The power of latest software technology for you.</h5>
      </div>
      <Universe className="self-center" />
    </div>
    <CustomerSlider />
  </SectionLayout>
);

export default MainSlide;
