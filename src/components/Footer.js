import styles from "./Footer.module.scss"
import fb from "../components/assets/facebook.svg"
import insta from "../components/assets/instagram.svg"
const Footer = () => {
    return (
      <div className={styles.Footer__container}>
        <div className={styles.social}>
            <img className={styles.facebook} src={fb}></img>
            <img className={styles.insta} src={insta}></img>
        </div>
            <h1 className={styles.title}>Green Guide</h1>
      </div>
    );
  }
export default Footer;
