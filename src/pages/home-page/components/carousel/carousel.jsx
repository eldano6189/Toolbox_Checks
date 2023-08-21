import { useContext } from "react";
import styles from "./carousel.module.css";
import ContextProvider from "../../../../context/context";
import { vmBasic } from "../../../../data/vmBasic";

const Carousel = () => {
  const { carouselRotate, currentTool, setCurrentTool } =
    useContext(ContextProvider);

  return (
    <div className={styles.container}>
      <ul
        className={styles.carousel}
        style={{
          transform: `perspective(62.5rem) rotateY(${carouselRotate}deg)`,
        }}
      >
        {vmBasic[0].trays.map((item, i) => {
          return (
            <li
              key={i}
              className={styles.carousel__item}
              style={{
                transform: `rotateY(${
                  i * (360 / vmBasic[0].trays.length)
                }deg) translateZ(25rem)`,
              }}
            >
              <div className={styles.item__top}></div>
              <div className={styles.item__left}></div>
              <div className={styles.item__right}></div>
              <div className={styles.item__back}></div>
              <div className={styles.item__face}>
                <svg viewBox="0 0 576 346" fill="none">
                  <path d={item.trayPath} />
                  {item.trayTools.map((tool, i) => {
                    return (
                      <path
                        key={i}
                        d={tool.toolPath}
                        style={{
                          strokeWidth:
                            currentTool.toolID === i + 1 &&
                            item.trayNo === currentTool.trayNo
                              ? "4px"
                              : "0",
                        }}
                        onClick={() =>
                          setCurrentTool({
                            ...currentTool,
                            trayNo: item.trayNo,
                            trayNSN: item.trayNSN,
                            toolID: tool.toolID,
                            toolNSN: tool.toolNSN,
                            toolQty: tool.toolQty,
                            toolDesc: tool.toolDesc,
                          })
                        }
                      />
                    );
                  })}
                </svg>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Carousel;
