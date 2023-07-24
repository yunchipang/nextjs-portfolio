import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import profileLinks from '../utils/profileLinks';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>hey, i&apos;m yunchi 🙌🏼</h3>
        <p>
          👩🏻‍🎓 a software engineer based in san francisco bay area, specialized in
          full-stack web & mobile app development.
        </p>
        <p>
          🌱 i am actively seeking fall 2023/summer 2024 internship/co-op
          opportunities in software engineering! you can contact me via{' '}
          <Link href={profileLinks.LINKEDIN} target="_blank">
            linkedin
          </Link>
          .
        </p>
        <p>
          ✨ when i am not in front of my computer screen, i train in hip-hop at{' '}
          <Link href={profileLinks.GG} target="_blank">
            @groovegenerationco
          </Link>{' '}
          and write blogs for{' '}
          <Link href={profileLinks.TRIZTRAVEL} target="_blank">
            triztravel.com
          </Link>
          .
        </p>
      </section>
    </Layout>
  );
}
