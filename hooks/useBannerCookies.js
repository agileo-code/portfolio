import { useEffect, useContext } from 'react';
import { useToast, Button } from '@chakra-ui/core';
import { LanguageContext } from '../context/language';

const useBannerCookies = () => {
  const toast = useToast();
  const { getTranslation } = useContext(LanguageContext);
  const onBannerAccept = () => localStorage.setItem('cookiesAccepted', true);

  useEffect(() => {
    setTimeout(() => {
      const cookiesAccepted =
        localStorage.getItem('cookiesAccepted') === 'true';
      const bannerCookieOpened =
        localStorage.getItem('bannerCookieOpened') === 'true';

      if (!cookiesAccepted && !bannerCookieOpened) {
        toast({
          duration: null,
          render: ({ onClose }) => {
            localStorage.setItem('bannerCookieOpened', true);
            return (
              <div className="w-screen bg-blue-700 text-white p-3">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                  <span>{getTranslation('[Coockie banner text]')}</span>
                  <div>
                    <Button
                      className="text-blue-600 border border-white mr-2"
                      variantColor="transparent"
                      onClick={() => {
                        onBannerAccept();
                        onClose();
                      }}
                    >
                      Aceptar
                    </Button>
                  </div>
                </div>
              </div>
            );
          }
        });
      }
    }, 1000);
  }, []);
};

export default useBannerCookies;
