import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

// import Date from 'components/date';
import Layout from 'components/layout/Layout';
import { getAllPostIds, getPostData } from 'lib/posts';
import utilStyles from 'styles/utils.module.css';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    techStack: string[];
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.techStackTags}>
          {postData.techStack.map((tech) => (
            <span key={tech} className={utilStyles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        {/* <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div> */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};
