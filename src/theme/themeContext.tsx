import React, { ReactNode } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'dark';
};

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};
const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

type ThemeProviderProps = {
  initialTheme?: string;
  children: ReactNode;
};

const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('color-theme', theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
