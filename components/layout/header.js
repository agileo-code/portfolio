/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Burger from '../../public/images/burger.svg';
import Cross from '../../public/images/cross.svg';
import Logo from '../../public/images/nimbel/NimbelInside.svg';
import LogoText from '../../public/images/nimbel/NimbelRight.svg';

const onMenuClick = (router, section) => {
  const pageSection = document.getElementById(section);
  if (pageSection) {
    pageSection.scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    router.push(`/#${section}`);
  }
};

const Header = () => {
  const [transparent, setTransparent] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setTransparent(window.pageYOffset < 60);
    window.addEventListener('scroll', () => {
      setTransparent(window.pageYOffset < 60);
    });
  }, []);

  const Menu = () => (
    <>
      <button
        type="button"
        className="m-2 cursor-pointer"
        onClick={() => onMenuClick(router, 'main')}
      >
        Home
      </button>
      <button
        type="button"
        className="m-2 cursor-pointer"
        onClick={() => onMenuClick(router, 'services')}
      >
        Services
      </button>
      <button
        type="button"
        className="m-2 cursor-pointer"
        onClick={() => onMenuClick(router, 'projects')}
      >
        Projects
      </button>
      <button
        type="button"
        className="m-2 cursor-pointer"
        onClick={() => onMenuClick(router, 'contact')}
      >
        Contact
      </button>
    </>
  );

  return (
    <div
      className={`transition duration-500 flex justify-between items-center w-full z-10 fixed ${
        transparent ? 'bg-transparent h-20' : 'bg-white h-12'
      }`}
    >
      <div
        className={`flex items-center h-full ml-4 ${
          transparent ? 'w-20 text-corporative-color' : 'w-40 text-black'
        }`}
      >
        {transparent ? (
          <Logo className="w-full" />
        ) : (
          <LogoText className="w-full" />
        )}
      </div>
      <div
        className={`mr-6 ${
          transparent ? 'text-corporative-color' : 'text-black'
        }`}
      >
        <div className="hidden md:block">
          <Menu />
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
              <div className="flex flex-col h-full items-center justify-center text-4xl">
                <Menu />
              </div>
            </BlurDiv>
          )}
        </div>
      </div>
    </div>
  );
};
export { Header as default, onMenuClick };

const BlurDiv = styled.div`
  backdrop-filter: blur(4px);
`;
