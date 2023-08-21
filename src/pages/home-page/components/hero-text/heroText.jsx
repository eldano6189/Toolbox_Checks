import styles from "./heroText.module.css";

const HeroText = () => {
  return (
    <div className={styles.container}>
      <h1>ONLINE TOOLBOX CHECKER</h1>
      <p>
        This website was designed and built to make the flow of toolbox checks
        smooth and effortless within the workplace.
      </p>
      <p>
        <strong>Select the tray, click the tool, grab the NSN!</strong>
      </p>
    </div>
  );
};

export default HeroText;
