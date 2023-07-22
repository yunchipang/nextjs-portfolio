import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import links from '../constants/links';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>hey, I'm yunchi 🙌🏼</h3>
        <p>👩🏻‍🎓 a software engineer based in san francisco bay area, specialized in full-stack web & mobile app development.</p>
        <p>🌱 I am actively seeking fall 2023/summer 2024 internship/co-op opportunities in software engineering! You can contact me via {" "}
          <Link href={links.LINKEDIN}>linkedIn</Link>.
        </p>
        <p>✨ when I am not in front of my computer screen, I train in hip-hop at {" "}
          <Link href={links.GG}>@groovegenerationco</Link> 
          {" "} and I write blogs for {" "}
          <Link href={links.TRIZTRAVEL}>triztravel.com</Link>.
        </p>
      </section>
    </Layout>
  );
}