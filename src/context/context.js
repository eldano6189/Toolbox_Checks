import { createContext, useState } from "react";

const ContextProvider = createContext();

export const ContextWrapper = ({ children }) => {
  const [carouselRotate, setCarouselRotate] = useState(0);
  const [report, setReport] = useState([]);
  const [currentTool, setCurrentTool] = useState({
    toolboxNSN: "5140-99-490-3944",
    trayNo: "",
    trayNSN: "",
    toolID: 0,
    toolNSN: "",
    toolQty: "",
    toolDesc: "",
  });

  return (
    <ContextProvider.Provider
      value={{
        carouselRotate,
        setCarouselRotate,
        currentTool,
        setCurrentTool,
        report,
        setReport,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextProvider;
