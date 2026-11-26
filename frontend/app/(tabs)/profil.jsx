
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { themes } from '../../constants/themes';
import { useAuth } from '../../contexts/AuthContext';

export default function Profil() {

  // Récupération du contexte
  const { colors, themeName, changeTheme } = useTheme();

  const { profile, logout } = useAuth();

  const styles = createStyles(colors);

  // Sections du profil
  const sections = [
    { titre: 'Mes favoris', icone: 'heart-outline' },
    { titre: 'Mes playlists', icone: 'musical-notes-outline' },
    { titre: "Historique d'écoute", icone: 'time-outline' },
    { titre: 'Mes statistiques', icone: 'stats-chart-outline' },
    { titre: 'Paramètres', icone: 'settings-outline' },
  ];

  // Thèmes disponibles
  const themeOptions = [
    { id: 'dark', icone: 'moon-outline' },
    { id: 'light', icone: 'sunny-outline' },
    { id: 'midnight', icone: 'sparkles-outline' },
  ];

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'left', 'right']}
    >
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>Mon profil</Text>

        {/* Informations de l'utilisateur */}
        <View style={styles.profileContainer}>

          <View style={styles.avatar}>
            <Ionicons
              name="person"
              size={45}
              color={colors.primary}
            />
          </View>

          <Text style={styles.username}>
            {profile?.name || 'Utilisateur'}
          </Text>

          <Text style={styles.subtitle}>
            {profile?.role === 'admin'
              ? 'Administrateur'
              : 'Mon univers musical'}
          </Text>

        </View>

        {/* Menu du profil */}
        {sections.map((section) => (
          <View
            key={section.titre}
            style={styles.menuItem}
          >
            <Ionicons
              name={section.icone}
              size={24}
              color={colors.primary}
            />

            <Text style={styles.menuText}>
              {section.titre}
            </Text>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textSecondary}
            />
          </View>
        ))}

        {/* Sélection du thème */}
        <Text style={styles.sectionTitle}>
          Apparence
        </Text>

        <Text style={styles.subtitle}>
          Personnalisez votre expérience musicale.
        </Text>

        <View style={styles.themeContainer}>

          {themeOptions.map((option) => {

            // Vérifie si ce thème est sélectionné
            const isActive = themeName === option.id;

            return (
              <Pressable
                key={option.id}
                onPress={() => changeTheme(option.id)}
                accessibilityRole="button"
                accessibilityState={{ selected: isActive }}
                style={[
                  styles.themeButton,
                  isActive && styles.activeThemeButton,
                ]}
              >
                <Ionicons
                  name={option.icone}
                  size={26}
                  color={
                    isActive
                      ? colors.primary
                      : colors.textSecondary
                  }
                />

                <Text
                  style={[
                    styles.themeText,
                    isActive && styles.activeThemeText,
                  ]}
                >
                  {themes[option.id].name}
                </Text>

                {isActive && (
                  <Ionicons
                    name="checkmark-circle"
                    size={18}
                    color={colors.primary}
                  />
                )}

              </Pressable>
            );
          })}

        </View>

        <Pressable
          style={styles.logoutButton}
          onPress={logout}
          accessibilityRole="button"
        >
          <Ionicons
            name="log-out-outline"
            size={22}
            color={colors.error}
          />

          <Text style={styles.logoutText}>
            Se déconnecter
          </Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    content: {
      padding: 20,
      paddingBottom: 30,
    },

    title: {
      color: colors.text,
      fontSize: 28,
      fontWeight: 'bold',
    },

    profileContainer: {
      alignItems: 'center',
      marginVertical: 30,
    },

    avatar: {
      width: 90,
      height: 90,
      borderRadius: 45,
      backgroundColor: colors.card,
      justifyContent: 'center',
      alignItems: 'center',
    },

    username: {
      color: colors.text,
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 12,
    },

    subtitle: {
      color: colors.textSecondary,
      marginTop: 5,
    },

    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      padding: 16,
      borderRadius: 10,
      marginBottom: 10,
    },

    menuText: {
      flex: 1,
      color: colors.text,
      fontSize: 16,
      marginLeft: 15,
    },

    sectionTitle: {
      color: colors.text,
      fontSize: 21,
      fontWeight: 'bold',
      marginTop: 25,
    },

    themeContainer: {
      flexDirection: 'row',
      gap: 10,
      marginTop: 15,
    },

    themeButton: {
      flex: 1,
      minHeight: 110,
      backgroundColor: colors.surface,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: colors.border,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      gap: 8,
    },

    activeThemeButton: {
      borderColor: colors.primary,
    },

    themeText: {
      color: colors.textSecondary,
      fontSize: 13,
      fontWeight: '600',
    },

    activeThemeText: {
      color: colors.primary,
    },
    logoutButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  padding: 16,
  marginTop: 30,
  marginBottom: 20,
  borderWidth: 1,
  borderColor: colors.error,
  borderRadius: 12,
},

logoutText: {
  color: colors.error,
  fontSize: 16,
  fontWeight: '600',
},

  });
