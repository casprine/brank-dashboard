import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import router from 'next/router';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import GlobalStyles from 'theme/globalStyle';

import theme from 'theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;

router.events.on('routeChangeStart', () => NProgress.start());
router.events.on('routeChangeComplete', () => NProgress.done());
