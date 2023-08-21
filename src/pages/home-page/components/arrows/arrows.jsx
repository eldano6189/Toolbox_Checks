import { LeftArrow, RightArrow } from "../../../../assets/svgs/arrow";
import styles from "./arrows.module.css";
import { useContext } from "react";
import ContextProvider from "../../../../context/context";
import { vmBasic } from "../../../../data/vmBasic";

const Arrows = () => {
  const { carouselRotate, setCarouselRotate } = useContext(ContextProvider);

  const handleRightClick = () => {
    setCarouselRotate(carouselRotate - 360 / vmBasic[0].trays.length);
  };

  const handleLeftClick = () => {
    setCarouselRotate(carouselRotate + 360 / vmBasic[0].trays.length);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.arrows}>
        <li className={styles.arrow} onClick={() => handleLeftClick()}>
          <LeftArrow />
        </li>
        <li className={styles.arrow} onClick={() => handleRightClick()}>
          <RightArrow />
        </li>
      </ul>
    </div>
  );
};

export default Arrows;
