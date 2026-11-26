
import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

export default function Connexion() {

  const { colors } = useTheme();
  const { login } = useAuth();

  const styles = createStyles(colors);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {

    setError('');

    // Vérification des champs
    if (!email.trim() || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Connexion factice
    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
    }

    // Stack.Protected gère automatiquement
    // le changement d'écran après la connexion.
  };

  return (
    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={
          Platform.OS === 'ios' ? 'padding' : undefined
        }
      >

        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >

          {/* Logo */}
          <View style={styles.logoContainer}>

            <Ionicons
              name="headset"
              size={80}
              color={colors.primary}
            />

            <Text style={styles.logo}>
              MV Beats
            </Text>

            <Text style={styles.subtitle}>
              Ton univers musical
            </Text>

          </View>

          <Text style={styles.title}>
            Connexion
          </Text>

          {/* Courriel */}
          <Text style={styles.label}>
            Adresse courriel
          </Text>

          <View style={styles.inputContainer}>

            <Ionicons
              name="mail-outline"
              size={22}
              color={colors.textSecondary}
            />

            <TextInput
              style={styles.input}
              placeholder="exemple@email.com"
              placeholderTextColor={colors.textSecondary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              accessibilityLabel="Adresse courriel"
            />

          </View>

          {/* Mot de passe */}
          <Text style={styles.label}>
            Mot de passe
          </Text>

          <View style={styles.inputContainer}>

            <Ionicons
              name="lock-closed-outline"
              size={22}
              color={colors.textSecondary}
            />

            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              placeholderTextColor={colors.textSecondary}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              accessibilityLabel="Mot de passe"
            />

            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              accessibilityRole="button"
              accessibilityLabel={
                showPassword
                  ? 'Masquer le mot de passe'
                  : 'Afficher le mot de passe'
              }
            >

              <Ionicons
                name={
                  showPassword
                    ? 'eye-off-outline'
                    : 'eye-outline'
                }
                size={22}
                color={colors.textSecondary}
              />

            </Pressable>

          </View>

          {/* Message d'erreur */}
          {error !== '' && (
            <View style={styles.errorContainer}>

              <Ionicons
                name="alert-circle-outline"
                size={20}
                color={colors.error}
              />

              <Text style={styles.error}>
                {error}
              </Text>

            </View>
          )}

          {/* Bouton connexion */}
          <Pressable
            style={styles.button}
            onPress={handleLogin}
            accessibilityRole="button"
          >

            <Text style={styles.buttonText}>
              Se connecter
            </Text>

          </Pressable>

          {/* Informations de démonstration */}
          <View style={styles.demoContainer}>

            <Text style={styles.demoTitle}>
              Mode démonstration
            </Text>

            <Text style={styles.demoText}>
              Courriel : demo@mvbeats.ca
            </Text>

            <Text style={styles.demoText}>
              Mot de passe : demo123
            </Text>

            <Pressable
              onPress={() => {
                setEmail('demo@mvbeats.ca');
                setPassword('demo123');
                setError('');
              }}
              accessibilityRole="button"
            >

              <Text style={styles.demoLink}>
                Remplir automatiquement
              </Text>

            </Pressable>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

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

    logoContainer: {
      alignItems: 'center',
      marginBottom: 45,
    },

    logo: {
      fontSize: 36,
      fontWeight: 'bold',
      color: colors.primary,
      marginTop: 12,
    },

    subtitle: {
      color: colors.textSecondary,
      fontSize: 15,
      marginTop: 8,
    },

    title: {
      color: colors.text,
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 25,
    },

    label: {
      color: colors.text,
      fontSize: 14,
      fontWeight: '600',
      marginBottom: 8,
    },

    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 12,
      paddingHorizontal: 15,
      height: 58,
      marginBottom: 20,
      gap: 12,
    },

    input: {
      flex: 1,
      color: colors.text,
      fontSize: 15,
    },

    errorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 15,
    },

    error: {
      flex: 1,
      color: colors.error,
      fontSize: 13,
    },

    button: {
      backgroundColor: colors.primary,
      borderRadius: 30,
      alignItems: 'center',
      padding: 17,
      marginTop: 10,
    },

    buttonText: {
      color: colors.background === '#F5F5F5'
        ? '#FFFFFF'
        : '#121212',
      fontSize: 16,
      fontWeight: 'bold',
    },

    demoContainer: {
      backgroundColor: colors.surface,
      borderRadius: 12,
      padding: 18,
      marginTop: 30,
    },

    demoTitle: {
      color: colors.primary,
      fontWeight: 'bold',
      marginBottom: 10,
    },

    demoText: {
      color: colors.textSecondary,
      fontSize: 13,
      marginBottom: 5,
    },

    demoLink: {
      color: colors.primary,
      fontWeight: '600',
      marginTop: 12,
    },

  });
