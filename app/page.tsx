import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'
import Main from '../components/Main'
import { Banner } from '../components/Banner'
import { Skills } from '../components/Skills'
export default function Home() {
  return (
    
    <main className={styles.container}>
      <Header />
      <div className={styles.description}>
        <Banner/>
        <Main />
        <Skills/>
        <div>
        </div>
      </div>

      <div className={styles.center}>
       
      </div>

      <div className={styles.grid}>
       
      </div>
    </main>
  )
}
