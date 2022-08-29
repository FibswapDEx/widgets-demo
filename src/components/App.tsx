import { useRef } from 'react'

import { useActiveProvider } from '../connectors'
import DocumentationCards from './DocumentationCards'
import Web3Connectors from './Web3Connectors'
import styles from '../styles/Home.module.css'
import { FibpalWidget } from '@fibswap-dex/fibswap-widget'

export default function App() {
  // When a user clicks "Connect your wallet" in the SwapWidget, this callback focuses the connectors.
  const connectors = useRef<HTMLDivElement>(null)

  // The provider to pass to the SwapWidget.
  // This is a Web3Provider (from @ethersproject) supplied by @web3-react; see ./connectors.ts.
  const provider = useActiveProvider()

  const order = {
    localAmount: 0.06,
    originSender: '0x94ec0Ba4c17C0a658B51ce375F73b1B18d2650cD',
    toChainId: 56,
    toData:
      '0x7053b116000000000000000000000000000000000000000000000000000000000004267600000000000000000000000094ec0ba4c17c0a658b51ce375f73b1b18d2650cd',
    toTo: '0xb28d74Cc439d522cba584E218BD62a0EBB0B3b78',
    toTransacting: '0x0000000000000000000000000000000000000000',
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Fibpal Widget</h1>

        <div className={styles.demo}>
          <div className={styles.connectors} ref={connectors} tabIndex={-1}>
            <Web3Connectors />
          </div>

          <div className={styles.widget}>
            <FibpalWidget order={order} provider={provider} />
          </div>
        </div>

        <hr className={styles.rule} />

        <DocumentationCards />
      </main>
    </div>
  )
}
