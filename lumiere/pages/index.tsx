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
          <div className={styles.card}>
            <h2>La La Land &rarr;</h2>
          </div>

          <div className={styles.card}>
            <h2>Whiplash &rarr;</h2>
          </div>

          <div className={styles.card}>
            <h2>A Dog&#39;s Purpose &rarr;</h2>
          </div>

          <div className={styles.card}>
            <h2>A Quiet Place &rarr;</h2>
          </div>

          <div className={styles.card}>
            <h2>Baby Driver &rarr;</h2>
          </div>
          
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
