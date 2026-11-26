
import { createContext, useContext, useState } from 'react';
import { themes } from '../constants/themes';

// Création du contexte
const ThemeContext = createContext(null);

// Provider qui partage le thème dans toute l'application
export function ThemeProvider({ children }) {

  // Le thème sombre est sélectionné par défaut
  const [themeName, setThemeName] = useState('dark');

  // Récupération des couleurs du thème actif
  const colors = themes[themeName];

  // Fonction permettant de changer de thème
  const changeTheme = (newTheme) => {
    if (Object.hasOwn(themes, newTheme)) {
      setThemeName(newTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        colors,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personnalisé pour accéder au contexte
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme doit être utilisé dans ThemeProvider'
    );
  }

  return context;
}
