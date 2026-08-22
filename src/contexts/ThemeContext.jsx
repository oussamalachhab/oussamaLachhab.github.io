// contexts/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Start with dark theme

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      // Dark theme colors
      dark: {
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#a855f7',
        text: '#ffffff',
        textSecondary: '#b0b0b0',
        button: '#4f46e5',
        border: '#374151'
      },
      // Light theme colors
      light: {
        primary: '#ffffff',
        secondary: '#f8fafc',
        accent: '#7c3aed',
        text: '#1f2937',
        textSecondary: '#6b7280',
        button: '#4f46e5',
        border: '#e5e7eb'
      }
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark 
          ? 'bg-[var(--asphalt)] text-white' 
          : 'bg-[var(--paddock)] text-gray-900'
      }`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};