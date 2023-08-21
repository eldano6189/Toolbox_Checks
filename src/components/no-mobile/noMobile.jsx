import styles from "./noMobile.module.css";

const NoMobile = () => {
  return (
    <div className={styles.container}>
      <h1>Sorry!</h1>
      <p>
        This application is not available on devices smaller than ipad mini's.
      </p>
    </div>
  );
};

export default NoMobile;
