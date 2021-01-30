import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


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

--header-font: 'Merriweather', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
--regular-font: 'Griphik web', -apple-system , BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

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


#nprogress {
	pointer-events: none
}

#nprogress .bar {
	background: white;
	position: fixed;
	z-index: 1031;
	top: 0;
	left: 0;
	width: 100%;
	height: 3px
}

#nprogress .peg {
	display: block;
	position: absolute;
	right: 0;
	width: 100px;
	height: 100%;
	opacity: 1;
	-webkit-transform: rotate(3deg) translate(0px, -4px);
	-ms-transform: rotate(3deg) translate(0px, -4px);
	transform: rotate(3deg) translate(0px, -4px)
}

#nprogress .spinner {
	position: fixed;
	z-index: 1031;
	bottom: 20px;
	right: 20px
}

#nprogress .spinner-icon {
	width: 20px;
	height: 20px;
	box-sizing: border-box;
	border: solid 2px transparent;
	border-top-color:  red;
	border-left-color: red;
	border-radius: 50%;
	-webkit-animation: nprogress-spinner 400ms linear infinite;
	animation: nprogress-spinner 400ms linear infinite
}

.nprogress-custom-parent {
	overflow: hidden;
	position: relative
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
	position: absolute
}

@-webkit-keyframes nprogress-spinner {
	0% {
		-webkit-transform: rotate(0deg)
	}
	100% {
		-webkit-transform: rotate(360deg)
	}
}

@keyframes nprogress-spinner {
	0% {
		transform: rotate(0deg)
	}
	100% {
		transform: rotate(360deg)
	}
}



`;

export default GlobalStyles;
