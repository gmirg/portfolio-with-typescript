import { createContext, useState, useEffect } from "react";

interface Theme {
  background: string;
  text: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: { background: "light", text: "dark" }, // Default theme values
  toggleTheme: () => {}, // Default toggleTheme function
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>({
    background: "light",
    text: "dark",
  });
  useEffect(() => {
    document.body.setAttribute("data-theme", theme.background);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      background: prevTheme.background === "light" ? "dark" : "light",
      text: prevTheme.text === "dark" ? "light" : "dark",
    }));
  };

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme.background);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme.background}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
