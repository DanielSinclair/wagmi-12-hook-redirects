import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSwitchNetwork, useSignMessage } from 'wagmi'
import { polygon } from 'wagmi/chains';

const Home: NextPage = () => {
  const { switchNetwork } =
    useSwitchNetwork()
    const { signMessage } = useSignMessage({
      message: 'gm wagmi frens',
    })
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
          WalletConnectLegacyConnector Hooks
        </h1>

        <p className={styles.description}>
          Test if the below hooks redirect the user to the wallet
        </p>

        <div className={styles.grid}>
          <a className={styles.card} onClick={() => switchNetwork?.(polygon.id)}>
            <h2>Switch Network &rarr;</h2>
            <p>useSwitchNetwork</p>
          </a>

          <a className={styles.card} onClick={() => signMessage()}>
            <h2>Sign Message &rarr;</h2>
            <p>useSignMessage</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
