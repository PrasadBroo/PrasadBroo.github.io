import React, { createContext, useState, useEffect, useContext } from "react";

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
      setIsDarkMode(isDarkMode);
    }
    return () => {
      localStorage.removeItem("isDarkMode");
    };
  }, []);

  useEffect(() => {
    if (isDarkMode)
      document.documentElement.setAttribute(
        "data-theme",
        isDarkMode ? "dark" : "light"
      );
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    console.log("I ran");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return useContext(ThemeContext);
};
