import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>
        Any issues, suggestions, incorrect or superceded NSN’s,
        <br />
        please contact <Link to="/contact">Sgt D Hall</Link>
      </p>
    </footer>
  );
};

export default Footer;
