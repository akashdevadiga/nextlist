import Head from "next/head";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          facere laudantium sint architecto error voluptas culpa quo labore, ullam
          eius eaque aliquam aut beatae tenetur earum obcaecati quidem eligendi
          exercitationem?
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          facere laudantium sint architecto error voluptas culpa quo labore, ullam
          eius eaque aliquam aut beatae tenetur earum obcaecati quidem eligendi
          exercitationem?
        </p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  );
}
