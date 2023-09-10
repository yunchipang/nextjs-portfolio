import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';
import 'styles/globals.css';
import 'prismjs/themes/prism.css'; // import 'prismjs/themes/prism-okaidia.css';
import 'styles/custom-prism.css'; // import custom prism settings after the default

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
