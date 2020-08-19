import CustomerSlider from '../customerSlider';
import SectionLayout from '../sectionLayout';
import Code from '../../public/images/code.svg';
const MainSlide = () => (
  <SectionLayout dark className="h-screen">
    <div className="flex items-center flex-1">
      <div>
        <h1>RUSHMORE CODE</h1>
        <h2>The future is here, come in and pay for it.</h2>
        <h2>Show me the money.</h2>
      </div>
      <Code className="flex-1 h-64" />
    </div>
    <CustomerSlider />
  </SectionLayout>
);

export default MainSlide;
