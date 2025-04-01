"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

type PropsType = {
  children: React.ReactNode;
};

interface ThemeContextProps {
  theme: "light" | "dark" | null;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  toggleDarkMode: () => {},
});

export function ThemeProvider({ children }: PropsType) {
  const [theme, setTheme] = useState<ThemeContextProps["theme"]>(null);

  useEffect(() => {
    if (
      !localStorage.getItem("theme") &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      const theme = localStorage.getItem("theme") as ThemeContextProps["theme"];
      setTheme(theme);
    }
    return () => {
      localStorage.removeItem("theme");
    };
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
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
