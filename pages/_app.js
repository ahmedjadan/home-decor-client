import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../theme/globalStyles';
import { theme } from '../theme/theme';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
