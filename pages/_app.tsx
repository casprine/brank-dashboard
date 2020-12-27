// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import './global.css';
import 'normalize.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
