import { ThemeProvider } from '@chakra-ui/core';
import LanguageProvider from '../context/language';

const GlobalProviders = ({ children }) => (
  <ThemeProvider>
    <LanguageProvider>{children}</LanguageProvider>
  </ThemeProvider>
);

export default GlobalProviders;
