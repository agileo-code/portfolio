import { useContext } from 'react';

import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { LangContext } from '../i18n-nimbel';

export default function Privacy() {
  const { t } = useContext(LangContext);
  return (
    <>
      <Header />
      <div className="bg-black text-white p-10">
        <h2 className="mt-20">{t('[Privacy policy]')}</h2>
        <p>{t('[pp-summary]')}</p>
        <h3 className="mt-10">
          {t('[pp-collected-information-title]')}
        </h3>
        <p>{t('[pp-collected-information]')}</p>
        <h3 className="mt-10">
          {t('[pp-information-use-title]')}
        </h3>
        <p>{t('[pp-information-use-1]')}</p>
        <p>{t('[pp-information-use-2]')}</p>
        <h3 className="mt-10">{t('[pp-cookies-title]')}</h3>
        <p>{t('[pp-cookies-1]')}</p>
        <p>{t('[pp-cookies-2]')}</p>
        <h3 className="mt-10">{t('[pp-external-links-title]')}</h3>
        <p>{t('[pp-external-links]')}</p>
        <h3 className="mt-10">
          {t('[pp-personal-information-control-title]')}
        </h3>
        <p>{t('[pp-personal-information-control]')}</p>
      </div>
      <Footer />
    </>
  );
}
