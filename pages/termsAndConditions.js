import { useContext } from 'react';
import Link from 'next/link';

import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { LangContext } from '../i18n-nimbel';

export default function Privacy() {
  const { t } = useContext(LangContext);
  return (
    <>
      <Header />
      <div className="bg-black text-white p-10">
        <h2 className="mt-20">{t('[tc-sumary-title]')}</h2>
        <p>{t('[tc-sumary]')}</p>
        <h3 className="mt-10">{t('[tc-general-title]')}</h3>
        <p>{t('[tc-general]')}</p>
        <h3 className="mt-10">{t('[tc-personal-data-title]')}</h3>
        <p>
          {t('[read]')}{' '}
          <Link href="privacy">
            <a className="text-blue-500" rel="nofollow">
              {t('[Privacy policy]')}
            </a>
          </Link>
        </p>
        <p>{t('[tc-personal-data]')}</p>
        <h3 className="mt-10">{t('[tc-commitments-title]')}</h3>
        <p>{t('[tc-commitments-1]')}</p>
        <p>{t('[tc-commitments-2]')}</p>
        <h3 className="mt-10">{t('[tc-security-title]')}</h3>
        <p>{t('[tc-security]')}</p>
        <h3 className="mt-10">{t('[tc-complaints-title]')}</h3>
        <p>{t('[tc-complaints]')}</p>
        <h3 className="mt-10">{t('[tc-platform-title]')}</h3>
        <p>{t('[tc-platform]')}</p>
        <h3 className="mt-10">
          {t('[tc-property-rights-title]')}
        </h3>
        <p>{t('[tc-property-rights-1]')}</p>
        <p>{t('[tc-property-rights-2]')}</p>
        <h3 className="mt-10">{t('[tc-external-links-title]')}</h3>
        <p>{t('[tc-external-links-1]')}</p>
        <p>{t('[tc-external-links-2]')}</p>
        <h3 className="mt-10">{t('[tc-disclaimer-title]')}</h3>
        <p>{t('[tc-disclaimer-1]')}</p>
        <p>{t('[tc-disclaimer-2]')}</p>
        <h3 className="mt-10">{t('[tc-law-title]')}</h3>
        <p>{t('[tc-law]')}</p>
        <h3 className="mt-10">{t('[tc-contact-title]')}</h3>
        <p>{t('[tc-contact]')}</p>
      </div>
      <Footer />
    </>
  );
}
