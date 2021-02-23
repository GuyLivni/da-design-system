import React from 'react';
import 'twin.macro';

import { ThemeContext } from './themeContext';

const useTheme = () => React.useContext(ThemeContext);

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()!;

  function isDark() {
    return theme === 'dark';
  }

  return (
    <div tw="flex flex-col items-center space-y-10 bg-secondary p-10 rounded-lg">
      <h1 tw="text-lg font-bold text-tertiary uppercase">
        {isDark() ? 'Dark' : 'Light'} Mode
      </h1>
      <button
        tw="w-6 h-6 focus:outline-none fill-current text-primary hover:text-secondary"
        onClick={() => setTheme(isDark() ? 'light' : 'dark')}
      >
        {isDark() ? 'Switch to light mode' : 'Switch to dark mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
