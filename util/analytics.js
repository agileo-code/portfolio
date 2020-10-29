import Analytics from 'analytics';
import googleAnalyticsPlugin from '@analytics/google-analytics';
import Router from 'next/router';

// Initialize analytics and plugins
// Documentation: https://getanalytics.io
const iniAnalytics = () => {
  const analytics = Analytics({
    debug: process.env.NODE_ENV === 'production',
    plugins: [
      googleAnalyticsPlugin({
        trackingId: 'UA-177632854-1',
        anonymizeIp: true
      })
    ]
  });
  if (typeof window !== 'undefined') {
    analytics.page();
  }
  // Track pageview on route change
  Router.events.on('routeChangeComplete', () => {
    analytics.page();
  });
};

export default iniAnalytics;
