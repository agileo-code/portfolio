import { useEffect, useState, useContext } from 'react';
import { Button } from '@chakra-ui/core';
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
    }, 1000);
  }, []);

  return (
    bannerOpen && (
      <div className="flex justify-center mb-3 z-10 fixed bottom-0 w-screen">
        <div className="w-5/6 bg-white text-black p-4 rounded-md border shadow-lg">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <span>{getTranslation('[Coockie banner text]')}</span>
            <div>
              <Button
                className="border border-blue-700 text-blue-700 mr-2 mt-4 lg:mt-0"
                bg="transparent"
                _hover={{ bg: 'rgba(0, 0, 0, 0.25)' }}
                onClick={() => {
                  onBannerAccept();
                  setBannerOpen(false);
                }}
              >
                {getTranslation('[Accept]')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default BannerCookies;
