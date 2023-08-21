import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import Layout from 'components/layout';
import utilStyles from 'styles/utils.module.css';

export default function Career() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <h3>💼 work style</h3>
        <p>
          I thrive in a{' '}
          <span className={utilStyles.blueHighlight}>
            dynamic and collaborative
          </span>{' '}
          work environment. I believe in open communication, creativity, and a
          results-driven approach. Here&apos;s what you can expect when working
          with me:
        </p>
        <li>
          Communication
          <p>
            <span className={utilStyles.yellowHighlight}>
              Clear and transparent communication
            </span>{' '}
            is key to my work style. I keep stakeholders informed and encourage
            feedback.
          </p>
        </li>
        <li>
          Efficiency
          <p>
            I&apos;m focused on{' '}
            <span className={utilStyles.yellowHighlight}>
              productivity and efficiency
            </span>
            , consistently seeking ways to optimize processes and deliver
            high-quality results
          </p>
        </li>
        <li>
          Accountability
          <p>
            I take <span className={utilStyles.yellowHighlight}>ownership</span>{' '}
            of my work and responsibilities, ensuring that tasks are completed
            on time and to the best of my ability.
          </p>
        </li>
      </section>
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
