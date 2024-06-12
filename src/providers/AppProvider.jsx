import React from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [switchHighlights, setSwitchHighlights] = React.useState(true);

  const context = {
    switchHighlights,
    setSwitchHighlights,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;
