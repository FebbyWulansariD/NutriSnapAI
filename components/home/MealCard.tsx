import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/theme';

type MealCardProps = {
  emoji: string;
  name: string;
  mealType: string;
  time: string;
  calories: number;
  onPress?: () => void;
};

export function MealCard({
  emoji,
  name,
  mealType,
  time,
  calories,
  onPress,
}: MealCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}>
      <View style={styles.imageContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>

        <Text style={styles.meta}>
          {mealType} · {time}
        </Text>
      </View>

      <View style={styles.calorieContainer}>
        <Text style={styles.calories}>{calories}</Text>

        <Text style={styles.kcal}>kcal</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: spacing.md,
    marginBottom: spacing.md,
  },

  pressed: {
    opacity: 0.8,
  },

  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: radius.lg,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },

  emoji: {
    fontSize: 30,
  },

  content: {
    flex: 1,
    paddingRight: spacing.sm,
  },

  name: {
    color: colors.text,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.md,
    marginBottom: 4,
  },

  meta: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
  },

  calorieContainer: {
    alignItems: 'flex-end',
  },

  calories: {
    color: colors.primary,
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.md,
  },

  kcal: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: 10,
  },
});