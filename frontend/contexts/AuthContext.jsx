
import {
  createContext,
  useContext,
  useState,
} from 'react';

// Création du contexte d'authentification
const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  // Utilisateur connecté
  const [user, setUser] = useState(null);

  // Profil sélectionné
  const [profile, setProfile] = useState(null);

  // Connexion factice pour le livrable 2
  const login = (email, password) => {

    // Vérification temporaire des identifiants
    if (
      email.trim().toLowerCase() !== 'demo@mvbeats.ca' ||
      password !== 'demo123'
    ) {
      return {
        success: false,
        message: 'Courriel ou mot de passe incorrect.',
      };
    }

    setProfile(null);

    setUser({
      id: 1,
      email: email.trim(),
    });

    return {
      success: true,
    };
  };

  // Sélection du profil
  const selectProfile = (selectedProfile) => {
    setProfile(selectedProfile);
  };

  // Déconnexion
  const logout = () => {
    setUser(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isAuthenticated: user !== null,
        login,
        logout,
        selectProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook personnalisé
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth doit être utilisé dans AuthProvider'
    );
  }

  return context;
}
