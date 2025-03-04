'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'dark', setTheme: () => null });

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'theme',
  attribute = 'data-theme',
  enableSystem = false,
}) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove old theme attribute
    root.removeAttribute(attribute);
    
    // Set new theme attribute
    root.setAttribute(attribute, theme);
    
    // Save theme to localStorage
    if (storageKey) {
      localStorage.setItem(storageKey, theme);
    }
  }, [theme, attribute, storageKey]);

  useEffect(() => {
    // Initialize theme from localStorage or default
    const savedTheme = localStorage.getItem(storageKey);
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (enableSystem) {
      // Check for system preference if enabled
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, [storageKey, enableSystem, defaultTheme]);

  // Listen for system preference changes if enabled
  useEffect(() => {
    if (!enableSystem) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [enableSystem]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme);
    },
    themes: ['light', 'dark'],
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};