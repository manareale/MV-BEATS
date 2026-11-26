
import { Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../contexts/ThemeContext';

export default function Accueil() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'left', 'right']}
    >
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.logo}>MV Beats</Text>

        <Text style={styles.title}>
          Bienvenue sur MV Beats
        </Text>

        <Text style={styles.subtitle}>
          Découvrez votre univers musical.
        </Text>

        <Text style={styles.sectionTitle}>
          Recommandations
        </Text>

        <Text style={styles.sectionTitle}>
          Chansons populaires
        </Text>

        <Text style={styles.sectionTitle}>
          Nouveautés
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

// Création des styles selon le thème actif
const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    content: {
      padding: 20,
    },

    logo: {
      color: colors.primary,
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 25,
    },

    title: {
      color: colors.text,
      fontSize: 24,
      fontWeight: 'bold',
    },

    subtitle: {
      color: colors.textSecondary,
      fontSize: 15,
      marginTop: 8,
    },

    sectionTitle: {
      color: colors.text,
      fontSize: 21,
      fontWeight: 'bold',
      marginTop: 35,
    },
  });
