import styles from "./header.module.css";
import ToolboxIcon from "../../assets/svgs/toolboxIcon";
import { Link } from "react-router-dom";
import Contact from "../../assets/svgs/contact";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.container__logo}>
        <div className={styles.logo}>
          <ToolboxIcon />
          <p>
            TOOLBOX
            <br />
            CHECKER
          </p>
        </div>
      </div>
      <nav className={styles.container__nav}>
        <ul>
          <li>
            <Link to="/">
              <ToolboxIcon />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Contact />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
