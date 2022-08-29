import styles from '../styles/Cards.module.css'
import { FaGithub, FaDiscord } from 'react-icons/fa'

export default function DocumentationCards() {
  return (
    <div className={styles.grid}>
      <a href="https://github.com/FibswapDEx/fibpal-widget" className={styles.card + ' ' + styles.external}>
        <div className={styles.row}>
          <FaGithub className={styles.logo} />
          <div className={styles.column}>
            <h3>GitHub</h3>
            <p>View the Fibpal Widget&apos;s source.</p>
          </div>
        </div>
      </a>
    </div>
  )
}
