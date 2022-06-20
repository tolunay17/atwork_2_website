import styles from './Contact.module.scss'

const Contact = () => {
    return (
      <form className={styles.Contact__container}>
        <div className={styles.all__item}>
          <div className={styles.Contact__text}>
              <h1 className={styles.title}>Contact</h1>
              <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, ex dolorem et facilis officiis impedit quae ipsum sapiente recusandae aut incidunt quod porro temporibus modi molestiae voluptatum amet deserunt earum.</p>
          </div>
          <div className={styles.form__info}>
            <div className={styles.first__element}>
              <div className={styles.name}>
                <input id="email" type="email" input="text" placeholder="Email"/>
              </div>
              <div className={styles.name}>
                <input id="name" type="text" placeholder="Naam"/>
              </div>
              <div className={styles.name}>
                <input id="name" type="text" placeholder="Onderwerp"/>
              </div>
            </div>
            <div className={styles.messagename}>
              <textarea id="message" placeholder="Bericht"/>
            <button className={styles.contactbtn} type="submit">versturen</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
export default Contact;