import { useContext } from 'react';
import { useRouter } from 'next/router';

import CustomerSlider from '../customerSlider';
import Universe from '../universe';
import { onMenuClick } from '../layout/header';
import { LangContext } from '../../i18n-nimbel';
import Logo from '../../public/images/nimbel.svg';

const MainSlide = () => {
  const { t } = useContext(LangContext);
  const router = useRouter();
  return (
    <section
      id="main"
      className="flex flex-col h-screen bg-corporative-slideDark text-corporative-color p-10"
      style={{
        backgroundImage:
          'url("images/main-bg.webp"), url("images/main-bg.jp2")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 content-center flex-1">
        <div className="flex flex-col justify-center items-center lg:items-start lg:ml-10">
          <Logo className="w-3/5" />
          <h1 className="mt-3">{t('[Slogan]')}</h1>
          <div className="flex justify-center py-3">
            <button
              type="button"
              onClick={() => onMenuClick(router, 'contact')}
              className="inline-flex text-white bg-corporative-blue border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
            >
              {t('[Contact]')}
            </button>
            <button
              type="button"
              onClick={() => onMenuClick(router, 'services')}
              className="ml-4 inline-flex text-gray-800 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              {t('[Services]')}
            </button>
          </div>
        </div>
        <Universe className="self-center" />
      </div>
      <CustomerSlider />
    </section>
  );
};

export default MainSlide;
