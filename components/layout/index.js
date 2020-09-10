import { ThemeProvider } from '@chakra-ui/core';

import Header from './header';
import Contact from './contact';
import Footer from './footer';

import LanguageProvider from '../../context/language';

const Layout = ({ children }) => (
  <ThemeProvider>
    <LanguageProvider>
      <Header />
      <main>{children}</main>
      <Contact />
      <Footer />
    </LanguageProvider>
  </ThemeProvider>
);

export default Layout;
