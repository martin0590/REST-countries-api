import { createContext, useState } from "react";

export const ColorContext = createContext({
  isDark: false,
  setIsDark: () => {},
});

export const ColorProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const value = {
    isDark,
    setIsDark,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
