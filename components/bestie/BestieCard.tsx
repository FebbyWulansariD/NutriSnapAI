import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/theme';

type BestieCardProps = {
  emoji: string;
  name: string;
  description: string;
  selected: boolean;
  onPress: () => void;
};

export function BestieCard({
  emoji,
  name,
  description,
  selected,
  onPress,
}: BestieCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        selected && styles.cardSelected,
        pressed && styles.cardPressed,
      ]}>
      <View
        style={[
          styles.avatar,
          selected && styles.avatarSelected,
        ]}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>

      <View style={styles.content}>
        <Text
          style={[
            styles.name,
            selected && styles.nameSelected,
          ]}>
          {name}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>

      <View
        style={[
          styles.radio,
          selected && styles.radioSelected,
        ]}>
        {selected && <View style={styles.radioInner} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.md,
    marginBottom: spacing.md,
  },

  cardSelected: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },

  cardPressed: {
    opacity: 0.85,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: radius.full,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarSelected: {
    backgroundColor: colors.surface,
  },

  emoji: {
    fontSize: 34,
  },

  content: {
    flex: 1,
  },

  name: {
    color: colors.text,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.lg,
    marginBottom: 4,
  },

  nameSelected: {
    color: colors.primary,
  },

  description: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    lineHeight: 19,
  },

  radio: {
    width: 24,
    height: 24,
    borderRadius: radius.full,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioSelected: {
    borderColor: colors.primary,
  },

  radioInner: {
    width: 12,
    height: 12,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
  },
});