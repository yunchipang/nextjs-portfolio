import {
  faLinkedin,
  faGithub,
  faInstagram,
  faWordpress,
  faPython,
  faJs,
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
          fullstack development using <FontAwesomeIcon icon={faJs} size="lg" />{' '}
          javascript / typescript and{' '}
          <FontAwesomeIcon icon={faPython} size="lg" /> python.
        </p>
        <p>
          🤖 passionate about building software solutions that empower
          individuals & businesses to thrive.
        </p>
        <p>
          🚀 actively seeking 2025 new grad fullstack software engineer
          opportunities. feel free to contact me via{' '}
          <Link href={profileLinks.LINKEDIN} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </Link>{' '}
          or check out my{' '}
          <Link href={profileLinks.GITHUB} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
          .
        </p>
        <p>
          🕺🏻 when i am not coding, i practice gymnastics, train in hip-hop on{' '}
          <Link href={profileLinks.GG} target="_blank">
            <FontAwesomeIcon icon={faInstagram} /> groovegeneration
          </Link>
          , camp in the great outdoors, and write blogs for{' '}
          <Link href={profileLinks.TRIZTRAVEL} target="_blank">
            <FontAwesomeIcon icon={faWordpress} /> triztravel
          </Link>{' '}
          .
        </p>
        <p>
          💡 fun facts: i love dinosaurs 🦖🦕 and i keep monsteras🪴 in my home.
          oh, and you&apos;ve probably noticed my quirky little habit of typing
          everything in lowercase ⌨️ !
        </p>
      </section>
    </Layout>
  );
}
