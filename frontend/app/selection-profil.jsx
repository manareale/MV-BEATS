
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { profiles } from '../data/mockData';

export default function SelectionProfil() {

  const { colors } = useTheme();

  const {
    selectProfile,
    logout,
  } = useAuth();

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>

        {/* Logo */}
        <View style={styles.header}>

          <Ionicons
            name="headset"
            size={65}
            color={colors.primary}
          />

          <Text style={styles.logo}>
            MV Beats
          </Text>

        </View>

        <Text style={styles.title}>
          Qui écoute ?
        </Text>

        <Text style={styles.subtitle}>
          Sélectionne ton profil
        </Text>

        {/* Liste des profils temporaires */}
        {profiles.map((profile) => (

          <Pressable
            key={profile.id}
            style={styles.profileCard}
            onPress={() => selectProfile(profile)}
            accessibilityRole="button"
            accessibilityLabel={
              `Sélectionner ${profile.name}`
            }
          >

            <View style={styles.avatar}>

              <Ionicons
                name={
                  profile.role === 'admin'
                    ? 'shield-checkmark'
                    : 'person'
                }
                size={42}
                color={colors.primary}
              />

            </View>

            <Text style={styles.profileName}>
              {profile.name}
            </Text>

            <Text style={styles.profileRole}>
              {
                profile.role === 'admin'
                  ? 'Profil administrateur'
                  : 'Profil standard'
              }
            </Text>

          </Pressable>

        ))}

        {/* Retour à la connexion */}
        <Pressable
          style={styles.logoutButton}
          onPress={logout}
          accessibilityRole="button"
        >

          <Ionicons
            name="arrow-back-outline"
            size={20}
            color={colors.textSecondary}
          />

          <Text style={styles.logoutText}>
            Retour à la connexion
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
      flexGrow: 1,
      justifyContent: 'center',
      padding: 25,
    },

    header: {
      alignItems: 'center',
      marginBottom: 35,
    },

    logo: {
      color: colors.primary,
      fontSize: 32,
      fontWeight: 'bold',
      marginTop: 10,
    },

    title: {
      color: colors.text,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    subtitle: {
      color: colors.textSecondary,
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 30,
    },

    profileCard: {
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 18,
      alignItems: 'center',
      padding: 25,
      marginBottom: 18,
    },

    avatar: {
      width: 85,
      height: 85,
      borderRadius: 45,
      backgroundColor: colors.card,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },

    profileName: {
      color: colors.text,
      fontSize: 19,
      fontWeight: 'bold',
    },

    profileRole: {
      color: colors.textSecondary,
      fontSize: 13,
      marginTop: 7,
    },

    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: 15,
      marginTop: 15,
    },

    logoutText: {
      color: colors.textSecondary,
      fontSize: 14,
    },

  });
