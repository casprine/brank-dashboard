import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import router from 'next/router';
import GlobalStyles from 'theme/globalStyle';
import 'normalize.css';
import { startIconLibrary } from 'components/icon/Icon';

startIconLibrary();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;

router.events.on('routeChangeStart', () => NProgress.start());
router.events.on('routeChangeComplete', () => NProgress.done());
