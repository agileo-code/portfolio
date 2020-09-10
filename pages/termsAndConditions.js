import { useContext } from 'react';
import Link from 'next/link';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { LanguageContext } from '../context/language';

export default function Privacy() {
  const { getTranslation } = useContext(LanguageContext);
  return (
    <>
      <Header />
      <div className="bg-black text-white p-10">
        <h1 className="mt-20">{getTranslation('[tc-sumary-title]')}</h1>
        <p>{getTranslation('[tc-sumary]')}</p>
        <h3 className="mt-10">{getTranslation('[tc-general-title]')}</h3>
        <p>{getTranslation('[tc-general]')}</p>
        <h3 className="mt-10">{getTranslation('[tc-general]')}</h3>
        <p>
          {getTranslation('[read]')}{' '}
          <Link href="privacy">
            <a className="text-blue-500" rel="nofollow">
              {getTranslation('[Privacy policy]')}
            </a>
          </Link>
        </p>
        <p>{getTranslation('[tc-personal-data]')}</p>
        <h3 className="mt-10">{getTranslation('[tc-commitments-title]')}</h3>
        <p>{getTranslation('[tc-commitments-1]')}</p>
        <p>{getTranslation('[tc-commitments-2]')}</p>
        <h3 className="mt-10">{getTranslation('[tc-security-title]')}</h3>
        <p>{getTranslation('[tc-security]')}</p>
        <h3 className="mt-10">{getTranslation('[tc-claims-title]')}</h3>
        <p>{getTranslation('[tc-claims]')}</p>
        <h3 className="mt-10">{getTranslation('[tc-platform-title]')}</h3>
        <p>{getTranslation('[tc-platform]')}</p>
        <h3 className="mt-10">
          {getTranslation('[tc-property-rights-title]')}
        </h3>
        <p>{getTranslation('[tc-property-rights-1]')}</p>
        <p>{getTranslation('[tc-property-rights-2]')}</p>
        <h3 className="mt-10">{getTranslation('[tc-external-links-title]')}</h3>
        <p>{getTranslation('[tc-external-links-1]')}</p>
        <p>{getTranslation('[tc-external-links-2]')}</p>
        <h3 className="mt-10">{getTranslation('[tc-disclaimer-title]')}</h3>
        <p>{getTranslation('[tc-disclaimer-1]')}</p>
        <p>{getTranslation('[tc-disclaimer-2]')}</p>
        <h3 className="mt-10">{getTranslation('[tc-law-title]')}</h3>
        <p>{getTranslation('[tc-law]')}</p>
        <h3 className="mt-10">{getTranslation('[tc-contact-title]')}</h3>
        <p>{getTranslation('[tc-contact]')}</p>
      </div>
      <Footer />
    </>
  );
}
