import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import links from '../constants/links';
import { getSortedPostsData } from '../lib/posts';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <h3>hey, I'm yunchi 🙌🏼</h3> */}
        <h3>hey, i&apos;m yunchi 🙌🏼</h3>

        <p>👩🏻‍🎓 a software engineer based in san francisco bay area, specialized in full-stack web & mobile app development.</p>
        <p>🌱 i am actively seeking fall 2023/summer 2024 internship/co-op opportunities in software engineering! you can contact me via {" "}
          <Link href={links.LINKEDIN}>linkedIn</Link>.
        </p>
        <p>✨ when i am not in front of my computer screen, i train in hip-hop at {" "}
          <Link href={links.GG}>@groovegenerationco</Link> 
          {" "} and write blogs for {" "}
          <Link href={links.TRIZTRAVEL}>triztravel.com</Link>.
        </p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
      </section> */}
    </Layout>
  );
}