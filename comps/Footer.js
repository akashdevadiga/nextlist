import Image from "next/image";
import styles from "../styles/Home.module.css";

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <span className={styles.logo}>
                <span>Copyright 2021 Ninjalist </span>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
      </footer>
     );
}
 
export default Footer;