import {
  faLinkedin,
  faInstagram,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from 'components/layout/Layout';
import utilStyles from 'styles/utils.module.css';
import profileLinks from 'utils/profileLinks';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h4>nice to meet you 🤝🏼</h4>
        <p>
          👩🏻‍🎓 a software engineer based in san francisco bay area, specialized in
          full-stack web & mobile app development.
        </p>
        <p>
          🤖 passionate about building software solutions that empower
          individuals & businesses to thrive.
        </p>
        <p>
          🚀 actively seeking summer 2024 internship/co-op opportunities in
          software engineering. feel free to contact me via{' '}
          <Link href={profileLinks.LINKEDIN} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </Link>
        </p>
        <p>
          ✨ when i am not coding, i train in hip-hop at{' '}
          <Link href={profileLinks.GG} target="_blank">
            <FontAwesomeIcon icon={faInstagram} /> groovegeneration
          </Link>{' '}
          and i write blogs for{' '}
          <Link href={profileLinks.TRIZTRAVEL} target="_blank">
            <FontAwesomeIcon icon={faWordpress} /> triztravel.com
          </Link>
          . drop by for a performance or an article!
        </p>
      </section>
    </Layout>
  );
}
