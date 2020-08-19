import { useState, useEffect } from 'react';
const Header = () => {
  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', e => {
      setTransparent(window.pageYOffset < 60);
    });
  }, []);

  return (
    <div
      className={`flex justify-between w-full z-10 fixed ${
        transparent ? 'bg-transparent h-20' : 'bg-white h-10'
      }`}
    >
      <div className="flex h-full w-32 p-3">
        <img src="/images/temporalLogo.svg" width="100%" />
      </div>
      <div></div>
    </div>
  );
};
export default Header;
