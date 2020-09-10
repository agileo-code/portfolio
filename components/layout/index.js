import Header from './header';
import Contact from './contact';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Contact />
    <Footer />
  </>
);

export default Layout;
