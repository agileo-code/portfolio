import { useContext } from 'react';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { LanguageContext } from '../context/language';

export default function Privacy() {
  const { getTranslation } = useContext(LanguageContext);
  return (
    <>
      <Header />
      <div className="bg-black text-white p-10">
        <h1 className="mt-20">{getTranslation('[Privacy policy]')}</h1>
        <p>{getTranslation('[pp-summary]')}</p>
        <h3 className="mt-10">
          {getTranslation('[pp-collected-information-title]')}
        </h3>
        <p>{getTranslation('[pp-collected-information]')}</p>
        <h3 className="mt-10">
          {getTranslation('[pp-information-use-title]')}
        </h3>
        <p>{getTranslation('[pp-information-use-1]')}</p>
        <p>{getTranslation('[pp-information-use-2]')}</p>
        <h3 className="mt-10">{getTranslation('[pp-cookies-title]')}</h3>
        <p>{getTranslation('[pp-cookies-1]')}</p>
        <p>{getTranslation('[pp-cookies-2]')}</p>
        <h3 className="mt-10">{getTranslation('[pp-external-links-title]')}</h3>
        <p>{getTranslation('[pp-external-links]')}</p>
        <h3 className="mt-10">
          {getTranslation('[pp-personal-information-control-title]')}
        </h3>
        <p>{getTranslation('[pp-personal-information-control]')}</p>
      </div>
      <Footer />
    </>
  );
}
