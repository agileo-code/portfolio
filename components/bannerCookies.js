import { useEffect, useState, useContext } from 'react';

import { LanguageContext } from '../context/language';

const BannerCookies = () => {
  const [bannerOpen, setBannerOpen] = useState(false);
  const { getTranslation } = useContext(LanguageContext);
  const onBannerAccept = () => localStorage.setItem('cookiesAccepted', true);

  useEffect(() => {
    setTimeout(() => {
      const cookiesAccepted =
        localStorage.getItem('cookiesAccepted') === 'true';
      const bannerCookieOpened =
        localStorage.getItem('bannerCookieOpened') === 'true';

      if (!cookiesAccepted && !bannerCookieOpened) {
        localStorage.setItem('bannerCookieOpened', true);
        setBannerOpen(true);
      }
    }, 0);
  }, []);

  return (
    bannerOpen && (
      <div className="flex justify-center mb-3 z-10 fixed bottom-0 w-screen">
        <div className="w-5/6 bg-white text-black p-4 rounded-md border">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <span>{getTranslation('[Coockie banner text]')}</span>
            <div>
              <button
                type="button"
                className="ml-4 inline-flex text-blue-700 bg-gray-100 border border-blue-700 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
                onClick={() => {
                  onBannerAccept();
                  setBannerOpen(false);
                }}
              >
                {getTranslation('[Accept]')}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default BannerCookies;
