import styles from "./homePage.module.css";

import HeroText from "./components/hero-text/heroText";
import Information from "./components/information/information";
import Carousel from "./components/carousel/carousel";
import Arrows from "./components/arrows/arrows";

const HompePage = () => {
  return (
    <div className={styles.container}>
      <HeroText />
      <Information />
      <Arrows />
      <Carousel />
    </div>
  );
};

export default HompePage;
