import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Link from 'next/link';

import Layout from 'components/layout';
import { getSortedProjectsData } from 'lib/projects';
import utilStyles from 'styles/utils.module.css';

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Projects({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>projects</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/* <h2 className={utilStyles.headingLg}>projects</h2> */}
        <ul className={utilStyles.list}>
          {allProjectsData.map(
            ({ id, title, description, githubLink, techStack }) => (
              <li className={utilStyles.listItem} key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Tech Stack: {techStack.join(', ')}</p>
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </Link>
                {/* <Link href={`/projects/${id}`}>{title}</Link> */}
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}
