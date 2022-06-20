import styles from './MobileApp.module.scss'
import mobileapp from "./assets/mobileApp.png"
import logoqr from "./assets/qrcode.png"
const DeApp = () => {
    return (
        <>
        <div className={styles.App__container}>
            <div className={styles.App_first__container}>
                <img className={styles.mobileapp} src={mobileapp}></img>
            </div>
            <div className={styles.App_second__container}>
                <h1 className={styles.title}>De app</h1>
                <p className={styles.App__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, ex dolorem et facilis officiis impedit quae ipsum sapiente recusandae aut incidunt quod porro temporibus modi molestiae voluptatum amet deserunt earum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, ex dolorem et facilis officiis impedit quae ipsum sapiente recusandae aut incidunt quod porro temporibus modi molestiae voluptatum amet deserunt earum.</p>
                <img className={styles.logoqr} src={logoqr}></img>
            </div>
        </div>
        </>

    );
};

export default DeApp;