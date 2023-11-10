import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const darkModeClass = isDarkMode ? 'dark-mode' : '';

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={darkModeClass}>{children}</div>
    </DarkModeContext.Provider>
  );
};
