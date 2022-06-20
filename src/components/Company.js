import styles from './Company.module.scss'

const Company = () => {
    return (
        <>
            <div className={styles.Company__container}>
                <h1 className={styles.title}>Voor bedrijven</h1>
                <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, ex dolorem et facilis officiis impedit quae ipsum sapiente recusandae aut incidunt quod porro temporibus modi molestiae voluptatum amet deserunt earum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, ex dolorem et facilis officiis impedit quae ipsum sapiente recusandae aut incidunt quod porro temporibus modi molestiae voluptatum amet deserunt earum.</p>
                <button className={styles.btnlogin} type="submit">Meld je hier aan!</button>
            </div>

        </>
    );
};

export default Company;