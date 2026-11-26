
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';

export default function Explorer() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'left', 'right']}
    >
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>Explorer</Text>

        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={22}
            color={colors.textSecondary}
          />

          <TextInput
            style={styles.input}
            placeholder="Chansons, artistes..."
            placeholderTextColor={colors.textSecondary}
          />
        </View>

        <Text style={styles.sectionTitle}>
          Catégories musicales
        </Text>

        <Text style={styles.sectionTitle}>
          Artistes populaires
        </Text>

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
    },

    title: {
      color: colors.text,
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
    },

    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.card,
      borderRadius: 12,
      paddingHorizontal: 15,
      height: 50,
    },

    input: {
      flex: 1,
      color: colors.text,
      fontSize: 16,
      marginLeft: 10,
    },

    sectionTitle: {
      color: colors.text,
      fontSize: 21,
      fontWeight: 'bold',
      marginTop: 30,
    },
  });
