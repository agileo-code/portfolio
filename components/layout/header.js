/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Burger from '../../public/images/burger.svg';
import Logo from '../../public/images/Agileo.svg';
import LogoText from '../../public/images/AgileoText.svg';

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

  const onMenuClick = section => {
    const pageSection = document.getElementById(section);
    if (pageSection) {
      pageSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      router.push(`/#${section}`);
    }
  };

  const Menu = () => (
    <>
      <button
        type="button"
        className="m-2 cursor-pointer"
        onClick={() => onMenuClick('main')}
      >
        Home
      </button>
      <button
        type="button"
        className="m-2 cursor-pointer"
        onClick={() => onMenuClick('services')}
      >
        Services
      </button>
      <button
        type="button"
        className="m-2 cursor-pointer"
        onClick={() => onMenuClick('projects')}
      >
        Projects
      </button>
      <button
        type="button"
        className="m-2 cursor-pointer"
        onClick={() => onMenuClick('contact')}
      >
        Contact
      </button>
    </>
  );

  return (
    <>
      {showMenu && (
        <BlurDiv
          className="bg-white z-20 h-screen w-screen fixed bg-opacity-75"
          onClick={() => setShowMenu(false)}
        >
          <span
            className="cursor-pointer absolute right-0 top-0 mt-3 mr-12"
            onClick={() => setShowMenu(false)}
          >
            X
          </span>
          <div className="flex flex-col h-full items-center justify-center text-4xl">
            <Menu />
          </div>
        </BlurDiv>
      )}
      <div
        className={`transition duration-500 flex justify-between items-center w-full z-10 fixed ${
          transparent ? 'bg-transparent h-20' : 'bg-white h-12'
        }`}
      >
        <div
          className={`flex items-center h-full ml-4 ${
            transparent ? 'w-10 text-corporative-color' : 'w-24 text-black'
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
          {!showMenu && (
            <Burger
              className="block md:hidden cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Header;

const BlurDiv = styled.div`
  backdrop-filter: blur(4px);
`;
