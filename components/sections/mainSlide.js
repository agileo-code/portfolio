import CustomerSlider from '../customerSlider';
import Universe from '../universe';
import Logo from '../../public/images/AgileoText.svg';

const MainSlide = () => (
  <div
    id="main"
    className="flex flex-col h-screen bg-corporative-slideDark text-corporative-color p-10"
  >
    <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 content-center flex-1">
      <div className="flex flex-col justify-center items-center lg:items-start lg:ml-10">
        <Logo className="w-2/5" />
        <h4 className="mt-3">
          The power of latest software technology for you.
        </h4>
      </div>
      <Universe className="self-center" />
    </div>
    <CustomerSlider />
  </div>
);

export default MainSlide;
