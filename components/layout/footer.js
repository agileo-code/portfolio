import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { LangContext } from '../../i18n-nimbel';
import Logo from '../../public/images/nimbel-code.svg';
import { onClick } from '../Menu';

const Footer = () => {
  const { t } = useContext(LangContext);
  const router = useRouter();

  return (
    <footer className="footer bg-black text-white p-10">
      <aside>
        <div className="w-24 h-15">
          <Logo className="w-full h-full" />
        </div>
        <p>{t('[Desarrollo de software a medida para empresas]')}</p>
      </aside>
      <nav>
        <h6 className="footer-title">{t('[Services]')}</h6>
        <button
          type="button"
          className="link link-hover"
          onClick={() => onClick(router, 'services')}
        >
          {t('[Web Development]')}
        </button>
        <button
          type="button"
          className="link link-hover"
          onClick={() => onClick(router, 'services')}
        >
          {t('[Mobile App Development]')}
        </button>
        <button
          type="button"
          className="link link-hover"
          onClick={() => onClick(router, 'services')}
        >
          {t('[Software team management]')}
        </button>
        <button
          type="button"
          className="link link-hover"
          onClick={() => onClick(router, 'services')}
        >
          {t('[Rescue mission]')}
        </button>
      </nav>
      <nav>
        <h6 className="footer-title">{t('[Company]')}</h6>
        <button
          type="button"
          className="link link-hover"
          onClick={() => onClick(router, 'about')}
        >
          {t('[About us]')}
        </button>
        <button
          type="button"
          className="link link-hover"
          onClick={() => onClick(router, 'contact')}
        >
          {t('[Contact]')}
        </button>
      </nav>
      <nav>
        <h6 className="footer-title">{t('[Legal]')}</h6>
        <Link href="/legalNotice" rel="nofollow" target="_blank">
          {t('[Aviso legal]')}
        </Link>
        <Link href="/privacy" rel="nofollow" target="_blank">
          {t('[Politica de privacidad]')}
        </Link>
        {/* <Link href="/termsAndConditions" rel="nofollow" target="_blank">
          {t('[Politica de Cookies]')}
        </Link> */}
      </nav>
    </footer>
  );
};

export default Footer;
