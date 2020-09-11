import { useEffect } from 'react';
import { useToast, Button } from '@chakra-ui/core';

const useBannerCookies = () => {
  const toast = useToast();
  const onBannerAccept = () => localStorage.setItem('cookiesAccepted', true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
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
                <span>
                  Este sitio web utiliza cookies para obtener datos estadísticos
                  de la navegación de sus usuarios. Si continúas navegando,
                  consideramos que aceptas su uso.
                </span>
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
  }, []);
};

export default useBannerCookies;
