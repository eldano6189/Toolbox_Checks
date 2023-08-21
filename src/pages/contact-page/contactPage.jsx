import Form from "./components/form/form";
import Title from "./components/title/title";
import styles from "./contactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Title />
      <Form />
    </div>
  );
};

export default ContactPage;
