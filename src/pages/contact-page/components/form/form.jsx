import styles from "./form.module.css";

import { useNavigate } from "react-router-dom";

const Form = () => {
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("contact-form");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/success"))
      .catch((error) => alert(error));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <form
          className={styles.form}
          id="contact-form"
          onSubmit={(e) => submitHandler(e)}
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
