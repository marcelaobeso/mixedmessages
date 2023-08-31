import styles from './page.module.css'
import { Message } from '@/components/Message'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <div>
        <h1>Mixed Messages</h1>
        </div>
      </div>

      <div className={styles.center}>
        <Message/>
      </div>
      
    </main>
  )
}
