import Head from 'next/head';

import Layout from 'components/layout/Layout';
import utilStyles from 'styles/utils.module.css';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>🌱 my roots and adventures</h3>
        <p>
          I grew up on the outskirts of Taipei, where the bustling streets and
          towering skyscrapers were the backdrop to my upbringing. My roots are
          firmly planted in this dynamic urban environment, however, my path
          took me on an international adventure, living in places as diverse as
          Hong Kong, Mexico, China, and now the US. Living abroad has been an
          incredible journey that has shaped me into a more independent and
          mature individual . Each destination brought unique challenges and
          opportunities that have enriched my life in profound ways.
        </p>
        <h3>👩🏻‍💻 becoming a developer</h3>
        <p>
          Majoring in Business Analytics during my undergraduate degree, I
          discovered my love for programming through an unexpected encounter
          with an internship. Working closely with a self-taught software
          engineer, I became captivated by the intricacies of coding. What
          started as a curiosity soon evolved into a deep passion as I found
          immense satisfaction in creating software solutions to aid and empower
          colleagues. This revelation not only ignited my enthusiasm but also
          paved the way for a career shift towards becoming a software
          developer.
        </p>
        <h3>💃🏻 beyond the screen</h3>
        <p>
          Dancing has always held a special place in my heart. Over the years,
          I&apos;ve dedicated time to train and improve my skills. Upon
          relocating to the Bay Area, I had the opportunity to join a dynamic
          hip-hop crew based in Oakland. Being part of this crew has granted me
          the privilege of performing at various venues across California.
          Dancing not only serves as a creative outlet but also teaches
          discipline, teamwork, and the power of self-expression. It&apos;s a
          passion that continues to inspire me, providing a balance to my life
          outside the world of software development.
        </p>
      </section>
    </Layout>
  );
}
