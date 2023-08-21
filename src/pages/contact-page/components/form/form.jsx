import styles from "./form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <form
          className={styles.form}
          name="contact"
          method="post"
          action="/success"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.form__input}>
            <div className={styles.wrapper__input}>
              <p>Email*</p>
              <input required type="email" name="email" />
            </div>
          </div>
          <div className={styles.form__input}>
            <div className={styles.wrapper__input}>
              <p>Name</p>
              <input type="text" name="name" />
            </div>
          </div>
          <div className={styles.form__input}>
            <div className={styles.wrapper__input}>
              <p>Subject*</p>
              <input required type="text" name="subject" />
            </div>
          </div>
          <div className={styles.form__input}>
            <div className={styles.wrapper__input}>
              <p>Message*</p>
              <textarea required name="message" />
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
