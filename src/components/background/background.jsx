import styles from "./background.module.css";

const Background = () => {
  const imgArray = ["bkgrd.jpeg", "bkgrd2.jpg"];
  let getRandomImage = Math.floor(Math.random() * imgArray.length);
  const backgroundImg = imgArray[getRandomImage];

  return (
    <div className={styles.container}>
      <img
        src={require(`../../assets/images/background-images/${backgroundImg}`)}
        alt="background of worshop related scene"
      />
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Background;
