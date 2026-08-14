import { StyleSheet, Text, View } from 'react-native';

import { colors, typography } from '@/theme';

export default function BestieScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bestie 💬</Text>
      <Text style={styles.subtitle}>
        Your AI nutrition companion will live here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: 24,
  },

  title: {
    color: colors.text,
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xxl,
  },

  subtitle: {
    marginTop: 8,
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
  },
});