import React from "react";
import { getGlobalInfo } from "../api/global";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [switchHighlights, setSwitchHighlights] = React.useState(true);
  const [globalInfo, setGlobalInfo] = React.useState({});

  React.useEffect(() => {
    if (switchHighlights) {
      getGlobalInfo().then((data) => setGlobalInfo(data));
    }
  }, [switchHighlights]);

  const context = {
    switchHighlights,
    globalInfo,
    setSwitchHighlights,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;

// const [globalInfo, setGlobalInfo] = React.useState({});
// const [errorMessage, setErrorMessage] = React.useState(null);
