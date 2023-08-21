import styles from "./form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => navigate("/success"))
      .catch((error) => alert(error));
  };

  const changeHandler = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
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
              <input
                required
                type="email"
                name="email"
                onChange={(e) => changeHandler(e)}
              />
            </div>
          </div>
          <div className={styles.form__input}>
            <div className={styles.wrapper__input}>
              <p>Name</p>
              <input
                type="text"
                name="name"
                onChange={(e) => changeHandler(e)}
              />
            </div>
          </div>
          <div className={styles.form__input}>
            <div className={styles.wrapper__input}>
              <p>Subject*</p>
              <input
                required
                type="text"
                name="subject"
                onChange={(e) => changeHandler(e)}
              />
            </div>
          </div>
          <div className={styles.form__input}>
            <div className={styles.wrapper__input}>
              <p>Message*</p>
              <textarea
                required
                name="message"
                onChange={(e) => changeHandler(e)}
              />
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
