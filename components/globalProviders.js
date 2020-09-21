import LanguageProvider from '../context/language';

const GlobalProviders = ({ children }) => (
    <LanguageProvider>{children}</LanguageProvider>
);

export default GlobalProviders;
