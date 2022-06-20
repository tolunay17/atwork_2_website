import styles from './AboutGreen.module.scss'
import logo from "./assets/aboutGreen.png"
import NavBar from './NavBar';

const AboutGreen = () => {
    return (
        <>
        <div className={styles.header__container}>
        <NavBar/>
        </div>
            <div className={styles.About__container}>
                <div className={styles.About_first__container}>
                    <h1 className={styles.title}>Green Guide</h1>
                    <h5 className={styles.subtitle}>Lorem ipsum</h5>
                    <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, ex dolorem et facilis officiis impedit quae ipsum sapiente recusandae aut incidunt quod porro temporibus modi molestiae voluptatum amet deserunt earum.</p>
                </div>
                <div className={styles.About_second__container}>
                    <img className={styles.logo} src={logo}></img>
                </div>
            </div>
        </>
    );
};

export default AboutGreen;