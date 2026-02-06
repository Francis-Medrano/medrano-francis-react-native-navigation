import React, { createContext, useContext, useState } from 'react';

export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  border: string;
}

interface ThemeContextType {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

const lightColors: ThemeColors = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#007AFF',
  secondary: '#E5E5EA',
  border: '#C6C6C6',
};

const darkColors: ThemeColors = {
  background: '#1C1C1E',
  text: '#FFFFFF',
  primary: '#0A84FF',
  secondary: '#3A3A3C',
  border: '#545458',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const colors = theme === 'light' ? lightColors : darkColors;

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
