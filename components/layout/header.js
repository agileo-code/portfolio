/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Burger from '../../public/images/burger.svg';
import Cross from '../../public/images/cross.svg';
import Logo from '../../public/images/nimbel-code.svg';
import Menu, { onClick } from '../Menu';

import LanguageSelector from '../LanguageSelector';

export const onMenuClick = onClick;

export default function Header() {
  const [transparent, setTransparent] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTransparent(window.pageYOffset < 40);
    window.addEventListener('scroll', () => {
      setTransparent(window.pageYOffset < 40);
    });
  }, []);

  return (
    <div
      className={`transition duration-500 flex justify-between items-center w-full z-10 fixed shadow-md ${
        transparent ? `bg-transparent h-20` : 'bg-white h-12'
      }`}
    >
      <div
        className={`flex items-center h-full ${
          transparent ? 'w-32 text-corporative-color' : 'w-32 text-black'
        }`}
      >
        {!transparent && (
          <Logo
            className="w-full m-5 cursor-pointer"
            onClick={() => onMenuClick(router, 'main')}
          />
        )}
      </div>
      <div
        className={`mr-6 ${
          transparent ? 'text-corporative-color' : 'text-black'
        }`}
      >
        <div className="hidden md:flex">
          <Menu desktop />
          {router.route.indexOf('/posts') === -1 && (
            <LanguageSelector desktop />
          )}
        </div>

        <div className="cursor-pointer" title="Open menu">
          {showMenu ? (
            <Cross
              className="relative z-10 text-black"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <Burger
              className="block md:hidden relative"
              onClick={() => setShowMenu(true)}
            />
          )}
          {showMenu && (
            <BlurDiv
              className="bg-white h-screen w-screen fixed top-0 left-0 bg-opacity-75 text-black"
              onClick={() => setShowMenu(false)}
            >
              <div className="flex flex-col h-full items-center justify-center">
                <Menu />
                {router.route.indexOf('/posts') === -1 && <LanguageSelector />}
              </div>
            </BlurDiv>
          )}
        </div>
      </div>
    </div>
  );
}

const BlurDiv = styled.div`
  backdrop-filter: blur(4px);
`;
