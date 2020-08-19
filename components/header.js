import { useState, useEffect } from 'react';
import Burger from '../public/images/burger.svg';
import Logo from '../public/images/temporalLogo.svg';
const Header = () => {
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    setTransparent(window.pageYOffset < 60);
    window.addEventListener('scroll', e => {
      setTransparent(window.pageYOffset < 60);
    });
  }, []);

  return (
    <div
      className={`transition duration-500 flex justify-between items-center w-full z-10 fixed ${
        transparent ? 'bg-transparent h-20' : 'bg-white h-12'
      }`}
    >
      <div
        className={`flex items-center h-full ml-4 ${
          transparent ? 'w-32 text-gray-200' : 'w-24 text-blue-500'
        }`}
      >
        <Logo />
      </div>
      <div
        className={`mr-6 ${transparent ? 'text-gray-200' : 'text-gray-700'}`}
      >
        <Burger />
      </div>
    </div>
  );
};
export default Header;
