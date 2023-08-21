import ContextProvider from "../../../../context/context";
import styles from "./information.module.css";
import { useContext } from "react";

const Information = () => {
  const { currentTool } = useContext(ContextProvider);

  return (
    <div className={styles.container}>
      <table>
        <tbody>
          <tr>
            <td>Toolbox NSN:</td>
            <td>{currentTool.toolboxNSN}</td>
          </tr>
          <tr>
            <td className={styles.spacer}></td>
            <td className={styles.spacer}></td>
          </tr>
          <tr>
            <td>Tray NSN:</td>
            <td>{currentTool.trayNSN}</td>
          </tr>
          <tr>
            <td>Tray No:</td>
            <td>{currentTool.trayNo}</td>
          </tr>
          <tr>
            <td className={styles.spacer}></td>
            <td className={styles.spacer}></td>
          </tr>
          <tr>
            <td>Tool NSN:</td>
            <td>{currentTool.toolNSN}</td>
          </tr>
          <tr>
            <td>Tool Qty:</td>
            <td>{currentTool.toolQty}</td>
          </tr>
          <tr>
            <td>Tool Desc:</td>
            <td>{currentTool.toolDesc}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Information;
