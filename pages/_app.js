import { useEffect } from 'react';
import GlobalProviders from '../components/globalProviders';

import '../styles/index.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    localStorage.setItem('bannerCookieOpened', false);
  }, []);

  return (
    <GlobalProviders>
      <Component {...pageProps} />
    </GlobalProviders>
  );
}
