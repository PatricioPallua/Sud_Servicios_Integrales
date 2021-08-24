import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navbar from '../components/navBar'
import Working from '../components/working'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Navbar />
      </Head>

      <main>
        <Working />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
