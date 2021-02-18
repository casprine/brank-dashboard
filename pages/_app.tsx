import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import router from 'next/router';
import GlobalStyles from 'theme/globalStyle';
import 'normalize.css';
import { startIconLibrary } from 'components/icon/Icon';
import AppProvider from 'context/AppProvider';
import ProtectedRoute from 'utils/ProtectedRoute';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

startIconLibrary();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <GlobalStyles />

        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      </AppProvider>
    </>
  );
}

export default App;

router.events.on('routeChangeStart', () => NProgress.start());
router.events.on('routeChangeComplete', () => NProgress.done());
