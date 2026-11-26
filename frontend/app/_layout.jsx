import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import {
  ThemeProvider,
  useTheme,
} from '../contexts/ThemeContext';

import {
  AuthProvider,
  useAuth,
} from '../contexts/AuthContext';

function RootNavigator() {
  const { colors } = useTheme();

  const {
    isAuthenticated,
    profile,
  } = useAuth();

  return (
    <>
      <StatusBar style={colors.statusBar} />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >

        {/* Accessible si non connecté */}
        <Stack.Protected guard={!isAuthenticated}>
          <Stack.Screen name="connexion" />
        </Stack.Protected>

        {/* Accessible après connexion */}
        <Stack.Protected
          guard={isAuthenticated && !profile}
        >
          <Stack.Screen name="selection-profil" />
        </Stack.Protected>

        {/* Accessible après sélection du profil */}
        <Stack.Protected
          guard={isAuthenticated && !!profile}
        >
          <Stack.Screen name="(tabs)" />
        </Stack.Protected>

      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <AuthProvider>
          <RootNavigator />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
