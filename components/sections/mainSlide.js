import { useRouter } from 'next/router';
import CustomerSlider from '../customerSlider';
import Universe from '../universe';
import { onMenuClick } from '../layout/header';
import Logo from '../../public/images/AgileoText.svg';

const MainSlide = () => {
  const router = useRouter();
  return (
    <div
      id="main"
      className="flex flex-col h-screen bg-corporative-slideDark text-corporative-color p-10"
    >
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 content-center flex-1">
        <div className="flex flex-col justify-center items-center lg:items-start lg:ml-10">
          <Logo className="w-2/5" />
          <h4 className="mt-3">The power of latest software technology.</h4>
          <div className="flex mt-8">
            <button
              type="button"
              onClick={() => onMenuClick(router, 'services')}
              className="bg-white text-black border-2 hover:bg-gray-400 p-1 pr-4 pl-4"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => onMenuClick(router, 'contact')}
              className="bg-white text-black border-2 hover:bg-gray-400 p-1 pr-4 pl-4 ml-4"
            >
              Contact
            </button>
          </div>
        </div>
        <Universe className="self-center" />
      </div>
      <CustomerSlider />
    </div>
  );
};

export default MainSlide;
