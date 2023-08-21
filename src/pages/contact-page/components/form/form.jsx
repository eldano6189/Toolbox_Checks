import styles from "./form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <form className={styles.form}>
          <input type="hidden" name="contact" value="contact" />
          <div className={styles.form__input}>
            <div className={styles.wrapper__input}>
              <p>Email*</p>
              <input required type="email" />
            </div>
          </div>
          <div className={styles.form__input}>
            <div className={styles.wrapper__input}>
              <p>Name</p>
              <input type="text" />
            </div>
          </div>
          <div className={styles.form__input}>
            <div className={styles.wrapper__input}>
              <p>Subject*</p>
              <input required type="text" />
            </div>
          </div>
          <div className={styles.form__input}>
            <div className={styles.wrapper__input}>
              <p>Message*</p>
              <textarea required />
            </div>
          </div>
          <div className={styles.form__input}>
            <button className={styles.button} type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
