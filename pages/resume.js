import Head from 'next/head';
import Layout from '../components/layout';

export default function Resume() {
    return (

        <Layout resume>
            <Head>
                <title>resume</title>
            </Head>
            <div>
                <a
                    href="/resume.pdf"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"
                >download pdf resume 👀</a>
            </div>
        </Layout>
        
    );
}