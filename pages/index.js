import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jack's Personal Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>
          Welcome to Me!
        </h1>

        <p className={styles.description}>
          Welcome to my website portfolio and repository for small projects!
        </p>

        <div className={styles.grid}>
          <a
            className={styles.card}
            href='/about'
          >
            <h3>About Me &rarr;</h3>
          </a>

          <a
            className={styles.card}
            href='/work_experience'
          >
            <h3>Work Experience &rarr;</h3>
            <p>A brief summary of my past work experience as a Software Developer!</p>
          </a>

          <a
            className={styles.card}
            href='/magic'
          >
            <h3>Magic Tool &rarr;</h3>
            <p>magic pricing tool</p>
          </a>

          <a
            href="https://github.com/JackTWilkinson"
            target="_blank"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
            <p>
              Here is my GitHub along with some additional projects/old code that I've written over the years.
            </p>
          </a>
        </div>
      </main>
      <footer>
        Created By Jack Wilkinson
      </footer>
    </div>
  )
}
