import Header from './header';
import Contact from './contact';
import Footer from './footer';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Contact />
    <Footer />
  </div>
);

export default Layout;
