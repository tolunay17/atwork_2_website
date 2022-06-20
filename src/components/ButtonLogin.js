import styles from "./ButtonLogin.module.scss";

const ButtonLogin = () => {
  return (
    <>
      <button className={styles.btnlogin} type="submit">
        Inloggen
      </button>
    </>
  );
};

export default ButtonLogin;
