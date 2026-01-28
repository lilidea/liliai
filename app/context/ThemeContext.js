"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const themes = {
  default: {
    name: 'Renk Kartelası 1',
    colors: {
      primary: '#E69419',
      secondary: '#0073FF',
      accent: '#000000',
      background: '#ffffff',
      text: '#171717',
    }
  },
  corporate: {
    name: 'Renk Kartelası 2',
    colors: {
      primary: '#0F172A', // Slate 900
      secondary: '#3B82F6', // Blue 500
      accent: '#64748B',
      background: '#F8FAFC',
      text: '#0F172A',
    }
  },
  pastel: {
    name: 'Renk Kartelası 3',
    colors: {
      primary: '#8B5CF6', // Violent
      secondary: '#F472B6', // Pink
      accent: '#C4B5FD',
      background: '#FFF1F2',
      text: '#4C1D95',
    }
  },
  dark: {
    name: 'Renk Kartelası 4',
    colors: {
      primary: '#22D3EE', // Cyan
      secondary: '#A5F3FC',
      accent: '#ffffff',
      background: '#0A0A0A',
      text: '#FAFAFA',
    }
  }
};

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    // Load theme from local storage
    const savedTheme = localStorage.getItem('site_theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme to CSS variables
    const theme = themes[currentTheme];
    const root = document.documentElement;

    // Save to local storage
    localStorage.setItem('site_theme', currentTheme);

    // Set CSS variables
    // We update the data-theme attribute on the html element
    root.setAttribute('data-theme', currentTheme);

    // Also manually set variables if needed dynamically, 
    // but we will prefer using CSS selectors in globals.css based on data-theme
    // However, for components reading these values in JS (like siteData), 
    // we might need to sync this context with SiteContext later.
    
    // For now, let's inject them as style properties on :root for immediate effect if needed,
    // or rely on globals.css classes. 
    // Let's go with the CSS Variable injection approach for maximum flexibility without huge CSS files.
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

  }, [currentTheme]);

  const changeTheme = (themeKey) => {
    if (themes[themeKey]) {
      setCurrentTheme(themeKey);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
