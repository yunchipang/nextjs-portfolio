import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import Date from 'components/date';
import Layout from 'components/layout';
import { getAllProjectIds, getProjectData } from 'lib/projects';
import utilStyles from 'styles/utils.module.css';

export default function Project({
  projectData,
}: {
  projectData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={projectData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = await getProjectData(params?.id as string);
  return {
    props: {
      projectData,
    },
  };
};
