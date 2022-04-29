import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lumiere</title>
        <meta name="description" content="Created by Andy Pang & Porridge Zou" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lumiere
        </h1>

        <p className={styles.description}>
          Welcome, Default User!
        </p>

        <div className={styles.grid}>
          <a href="https://www.imdb.com/title/tt3783958/?ref_=fn_al_tt_1" className={styles.card}>
            <h2>La La Land &rarr;</h2>
            <p>Starring: Emma Stone, Ryan Gosling</p>
          </a>

          <a href="https://www.imdb.com/title/tt2582802/" className={styles.card}>
            <h2>Whiplash &rarr;</h2>
            <p>Starring: Miles Teller, J.K. Simmons</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/andypang1010/INFO_1998_Final_Project"
          target="_blank"
          rel="noreferrer"
        >
          Created by Andy Pang & Porridge Zou
        </a>
      </footer>
    </div>
  )
}

export default Home
