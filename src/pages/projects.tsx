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
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <h3>
                    <Link href={`/projects/${id}`}>{title}</Link>
                  </h3>
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </Link>
                </div>
                <p>{description}</p>
                <div className={utilStyles.techStackTags}>
                  {techStack.map((tech) => (
                    <span key={tech} className={utilStyles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}
