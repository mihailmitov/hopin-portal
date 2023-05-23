import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HopinModal from "../components/HopinModal";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={() => setShow(true)}>Click me</button>
        <HopinModal show={show} title="my test title" onClose={() => setShow(false)}>
          my provided children
        </HopinModal>
      </main>
    </div>
  );
}
