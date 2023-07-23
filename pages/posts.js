import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
	return (
		<Layout>
			<Head>
				<title>posts</title>
			</Head>
				<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
					<h2 className={utilStyles.headingLg}>posts</h2>
					<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
						{title}
						<br />
						{id}
						<br />
						{date}
						</li>
					))}
					</ul>
				</section>
		</Layout>
	)
}