import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';
import 'styles/globals.css';
import 'prismjs/themes/prism-okaidia.css'; // import 'prismjs/themes/prism.css' for default

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
