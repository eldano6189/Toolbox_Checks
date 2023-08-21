import styles from "./title.module.css";

const Title = () => {
  return (
    <div className={styles.container}>
      <h1>Get in touch.</h1>
      <p>
        Any comments, queries, suggestions or complaints, please dont hesitate
        to contact me. Simply fill in the form provided with as much detail as
        possible and i will get in touch as soon as possible.
      </p>
    </div>
  );
};

export default Title;
