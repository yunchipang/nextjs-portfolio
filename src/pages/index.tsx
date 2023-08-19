import {
  faLinkedin,
  faInstagram,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from 'components/layout';
import utilStyles from 'styles/utils.module.css';
import profileLinks from 'utils/profileLinks';

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
        </p>
      </section>
      <br />
      <section className={utilStyles.headingMd}>
        <p>
          <Link
            href="/yunchipang_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCircleDown} /> download my resume
          </Link>{' '}
        </p>
      </section>
    </Layout>
  );
}
