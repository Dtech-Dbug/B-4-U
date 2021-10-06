import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tf from "./tf";
import Link from "next/link";

//uis
import BUTTON from "../Components/Ui-Elements/BUTTON";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div
          // className={styles.container}
          className={styles.splashScreen}
        >
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <header className={styles.logo}>
            <h1># hashtag</h1>
          </header>
          <Link href="/tf">
            <a href="">
              <BUTTON />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
