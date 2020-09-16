import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Button, ButtonGroup } from '@chakra-ui/core';

import CustomerSlider from '../customerSlider';
import Universe from '../universe';
import { onMenuClick } from '../layout/header';
import { LanguageContext } from '../../context/language';
import Logo from '../../public/images/nimbel.svg';

const MainSlide = () => {
  const { getTranslation } = useContext(LanguageContext);
  const router = useRouter();
  return (
    <div
      id="main"
      className="flex flex-col h-screen bg-corporative-slideDark text-corporative-color p-10"
    >
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 content-center flex-1">
        <div className="flex flex-col justify-center items-center lg:items-start lg:ml-10">
          <Logo className="w-3/5" />
          <h4 className="mt-3">{getTranslation('[Slogan]')}</h4>
          <ButtonGroup spacing={4} className="mt-6">
            <Button
              type="button"
              onClick={() => onMenuClick(router, 'services')}
              backgroundColor="white"
              color="black"
            >
              {getTranslation('[Services]')}
            </Button>
            <Button
              type="button"
              onClick={() => onMenuClick(router, 'contact')}
              backgroundColor="white"
              color="black"
            >
              {getTranslation('[Contact]')}
            </Button>
          </ButtonGroup>
        </div>
        <Universe className="self-center" />
      </div>
      <CustomerSlider />
    </div>
  );
};

export default MainSlide;
