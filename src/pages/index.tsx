import {
  faLinkedin,
  faGithub,
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
          👩🏻‍🎓 a software engineer based in boston, with hands-on experience in data platform and large-scale processing systems.
        </p>
        <p>
          🤖 passionate about open-source (check out my{' '}
          <Link href={profileLinks.GITHUB} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
          ) and building reliable, scalable software that empowers individuals,
          businesses, and communities to thrive.
        </p>
        <p>
          🕺🏻 when i am not coding, i hit the gym, dance, snowboard, cook & camp in the
          outdoors.
        </p>
        <p>
          💡 fun facts: i love dinosaurs🦕 and i keep monsteras🪴 in my home.
          oh, and you&apos;ve probably noticed my quirky little habit of typing
          everything in lowercase ⌨️ !
        </p>
      </section>
    </Layout>
  );
}
