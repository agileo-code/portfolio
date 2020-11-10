import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';

import { LangContext } from '../i18n-nimbel'

const BannerCookies = () => {
  const [bannerOpen, setBannerOpen] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const { t } = useContext(LangContext);
  const onBannerAccept = () => {
    localStorage.setItem('cookiesAccepted', true);
    setCookiesAccepted(true);
  };

  useEffect(() => {
    setTimeout(() => {
      const tempCookiesAccepted =
        localStorage.getItem('cookiesAccepted') === 'true';
      const bannerCookieOpened =
        localStorage.getItem('bannerCookieOpened') === 'true';

      if (!tempCookiesAccepted && !bannerCookieOpened) {
        localStorage.setItem('bannerCookieOpened', true);
        setBannerOpen(true);
      }
    }, 0);
  }, []);

  useEffect(() => {
    // if (cookiesAccepted) analytics();
  }, [cookiesAccepted]);

  return (
    bannerOpen && (
      <div className="flex justify-center mb-3 z-10 fixed bottom-0 w-screen">
        <div className="w-5/6 bg-gray-400 text-black p-4 rounded-md border">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <span>
              {t('[Coockie banner text]')}
              <Link href="/privacy">
                <a rel="nofollow" className="text-blue-700">{` ${t(
                  '[More info]'
                )}`}</a>
              </Link>
            </span>
            <div className="flex flex-1">
              <button
                type="button"
                className="ml-4 inline-flex bg-blue-700 text-white py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg"
                onClick={() => {
                  onBannerAccept();
                  setBannerOpen(false);
                }}
              >
                {t('[Accept]')}
              </button>
              <button
                type="button"
                className="ml-4 inline-flex text-blue-700 bg-white border border-blue-700 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
                onClick={() => {
                  setBannerOpen(false);
                }}
              >
                {t('[Reject]')}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default BannerCookies;
