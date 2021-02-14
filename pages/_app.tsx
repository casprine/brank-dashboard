import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import router from 'next/router';
import GlobalStyles from 'theme/globalStyle';
import 'normalize.css';
import { startIconLibrary } from 'components/icon/Icon';
import AppProvider from 'context/AppProvider';
import { ProtectRoute } from 'utils/ProtectedRoute';
startIconLibrary();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <ProtectRoute>
          <GlobalStyles />
          <Component {...pageProps} />
        </ProtectRoute>
      </AppProvider>
    </>
  );
}

export default App;

router.events.on('routeChangeStart', () => NProgress.start());
router.events.on('routeChangeComplete', () => NProgress.done());
