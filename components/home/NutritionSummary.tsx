import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/theme';

type NutritionSummaryProps = {
  consumedCalories: number;
  targetCalories: number;
};

export function NutritionSummary({
  consumedCalories,
  targetCalories,
}: NutritionSummaryProps) {
  const progress = Math.min(
    consumedCalories / targetCalories,
    1
  );

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Today&apos;s Calories</Text>

        <Text style={styles.emoji}>🔥</Text>
      </View>

      <View style={styles.calorieRow}>
        <Text style={styles.consumed}>
          {consumedCalories}
        </Text>

        <Text style={styles.target}>
          / {targetCalories} kcal
        </Text>
      </View>

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${progress * 100}%`,
            },
          ]}
        />
      </View>

      <Text style={styles.caption}>
        {targetCalories - consumedCalories > 0
          ? `${targetCalories - consumedCalories} kcal left for today`
          : 'You reached your calorie target today'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.xl,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: colors.text,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.md,
  },

  emoji: {
    fontSize: 20,
  },

  calorieRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: spacing.md,
  },

  consumed: {
    color: colors.primary,
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.display,
  },

  target: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    marginLeft: spacing.sm,
  },

  progressTrack: {
    height: 10,
    backgroundColor: colors.primaryLight,
    borderRadius: radius.full,
    overflow: 'hidden',
    marginTop: spacing.lg,
  },

  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: radius.full,
  },

  caption: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    marginTop: spacing.md,
  },
});