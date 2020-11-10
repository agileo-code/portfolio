import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';

import LangProvider from '../i18n-nimbel';
import SEO from '../next-seo-config';
import translations from '../public/translations/translations.json';
import '../styles/index.css';

export default function App({ Component, pageProps }) {
  const { locale, push, route } = useRouter();

  useEffect(() => {
    localStorage.setItem('bannerCookieOpened', false);
  }, []);

  return (
    <LangProvider
      locale={locale}
      translations={translations}
      push={push}
      route={route}
    >
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </LangProvider>
  );
}
