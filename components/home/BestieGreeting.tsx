import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/theme';

type BestieGreetingProps = {
  name: string;
  emoji: string;
  message: string;
};

export function BestieGreeting({
  name,
  emoji,
  message,
}: BestieGreetingProps) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarEmoji}>{emoji}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Meet {name} 💗</Text>

        <Text style={styles.name}>{name}</Text>

        <Text style={styles.message}>{message}</Text>
      </View>

      <Text style={styles.sparkle}>✦</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },

  avatarEmoji: {
    fontSize: 32,
  },

  content: {
    flex: 1,
  },

  label: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
  },

  name: {
    color: colors.primary,
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.md,
    marginBottom: 2,
  },

  message: {
    color: colors.text,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    lineHeight: 19,
  },

  sparkle: {
    color: colors.accent,
    fontSize: 24,
    alignSelf: 'flex-start',
  },
});