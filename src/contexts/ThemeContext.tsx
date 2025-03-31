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
      const isDarkMode = JSON.parse(localStorage.getItem("theme") || "false");
      setTheme(isDarkMode ? "dark" : "light");
    }
    return () => {
      localStorage.removeItem("theme");
    };
  }, []);

  useEffect(() => {
    if (theme === "dark")
      document.documentElement.setAttribute("data-theme", theme);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleDarkMode = () => {
    console.log("I ran");
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
