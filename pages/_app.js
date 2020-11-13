import GlobalProviders from '../components/globalProviders';

import '../styles/index.css';

export default function App({ Component, pageProps }) {
  return (
    <GlobalProviders>
      <Component {...pageProps} />
    </GlobalProviders>
  );
}
