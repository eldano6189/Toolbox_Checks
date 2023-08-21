import { Link } from "react-router-dom";
import styles from "./successPage.module.css";

const SuccessPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__text}>
        <div className={styles.head}>
          <h1>Success!</h1>
        </div>
        <div className={styles.body}>
          <h2>
            Thankyou for getting in touch,
            <br />i will get back to you or rectify any issues you may have
            found.
          </h2>
        </div>
        <div className={styles.foot}>
          <Link className={styles.button} to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
