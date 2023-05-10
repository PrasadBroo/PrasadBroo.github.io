import React, { createContext, useState, useEffect } from "react";

type PropsType = {
  children: React.ReactNode;
};

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleDarkMode: () => undefined,
});

export function ThemeProvider({ children }: PropsType) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = JSON.parse(
      localStorage.getItem("isDarkMode") || "false"
    );
    if (isDarkMode) toggleDarkMode();
  }, []);

  
  useEffect(() => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
