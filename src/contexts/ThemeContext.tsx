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
    if (
      !localStorage.getItem("isDarkMode") &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    } else {
      const isDarkMode = JSON.parse(
        localStorage.getItem("isDarkMode") || "false"
      );
      isDarkMode ? setIsDarkMode(true) : setIsDarkMode(false);
    }
    return () => {
      localStorage.removeItem("isDarkMode");
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
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
