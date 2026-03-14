import { createContext, useContext, useEffect, ReactNode } from "react";

type Theme = "light";

const ThemeContext = createContext<{
  theme: Theme;
}>({ theme: "light" });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      {children}
    </ThemeContext.Provider>
  );
};
