import React, { createContext, useContext, useState } from 'react';

export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  textSecondary: string;
  primary: string;
  secondary: string;
  border: string;
  accent: string;
  success: string;
}

interface ThemeContextType {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

const lightColors: ThemeColors = {
  background: '#FFFFFF',
  text: '#1a1a1a',
  textSecondary: '#6B7280',
  primary: '#6366F1',
  secondary: '#F3F4F6',
  border: '#E5E7EB',
  accent: '#fd0000',
  success: '#10B981',
};

const darkColors: ThemeColors = {
  background: '#0F172A',
  text: '#F1F5F9',
  textSecondary: '#CBD5E1',
  primary: '#818CF8',
  secondary: '#1E293B',
  border: '#334155',
  accent: '#F87171',
  success: '#34D399',
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
