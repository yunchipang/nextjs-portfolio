import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>hey, I'm yunchi 🙌🏼</h3>
        <p>👩🏻‍🎓 a software engineer based in san francisco bay area, specialized in full-stack web & mobile app development.</p>
        <p>🌱 I am actively seeking fall 2023/summer 2024 internship/co-op opportunities in software engineering!</p>
        <p>✨ when I am not in front of my computer screen, I train in hip-hop at @groovegenerationco, and I write blogs for triztravel.com</p>
      </section>
    </Layout>
  );
}