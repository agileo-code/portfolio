import analytics from '../util/analytics';
import GlobalProviders from '../components/globalProviders';

import '../styles/index.css';

export default function App({ Component, pageProps }) {
  return (
    <GlobalProviders>
      <Component {...pageProps} />
    </GlobalProviders>
  );
}

export function reportWebVitals({ id, name, label, value }) {
  analytics.track(name, {
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true // avoids affecting bounce rate.
  });
}
