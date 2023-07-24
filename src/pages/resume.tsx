import Head from 'next/head';

import Layout from '../components/layout';

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>resume</title>
      </Head>
      <div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          download pdf resume 👀
        </a>
      </div>
    </Layout>
  );
}
