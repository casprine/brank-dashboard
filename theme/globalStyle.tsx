import { css, Global } from '@emotion/react';
import theme from 'theme';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,300;1,300&display=swap');

        @font-face {
          font-family: 'Merriweather';
          src: url('/fonts/Merriweather.ttf');
          font-display: swap;
        }

        @font-face {
          font-family: 'Griphik web';
          src: url('/fonts/graphik-regular-web.woff2') format('woff2');
          font-weight: 1 1000;
          font-display: block;
          unicode-range: U+007f-ffff;
        }

        :root {
          --header-font: 'Merriweather', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          --regular-font: 'Griphik web', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          --btn-background: linear-gradient(180deg, #10b981, #059669);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          letter-spacing: 0.2px;
          font-weight: 350;
          font-family: var(--regular-font);
          -webkit-font-smoothing: antialiased;
          -webkit-appearance: default-button;
        }

        .container {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .auth-container {
          width: 500px;
          display: flex;
          flex-direction: column;
        }

        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: ${theme.colors.primary};

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
        }

        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px ${theme.colors.primary}, 0 0 5px ${theme.colors.primary};
          opacity: 1;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }

        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: ${theme.colors.primary};
          border-left-color: ${theme.colors.primary};
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px ${theme.colors.grey} inset !important;
        }

        a {
          text-decoration: none;
          color: var(--primary-green);
          font-size: 14px;
        }
      `}
    />
  );
};

export default GlobalStyles;
