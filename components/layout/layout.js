import Header from './header';
import Contact from './contact';
import Footer from './footer';

import LanguageProvider from '../../context/language';

const Layout = ({ children }) => (
  <LanguageProvider>
    <Header />
    <main>{children}</main>
    <Contact />
    <Footer />
  </LanguageProvider>
);

export default Layout;
