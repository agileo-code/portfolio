import { useContext } from 'react';

import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import { LangContext } from '../i18n-nimbel';

export default function LegalNotice() {
  const { t } = useContext(LangContext);
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <Header />
      <div className="p-10">
        <h2 className="mt-20">{t('[Aviso legal]')}</h2>
        <ul>
          <li>{t('[Legal notice]')}</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
