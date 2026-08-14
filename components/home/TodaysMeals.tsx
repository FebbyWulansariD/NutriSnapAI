import { StyleSheet, Text, View } from 'react-native';

import { MealCard } from '@/components/home/MealCard';
import { todaysMeals } from '@/constants/meals';
import { colors, spacing, typography } from '@/theme';

export function TodaysMeals() {
  const totalCalories = todaysMeals.reduce(
    (total, meal) => total + meal.nutrition.calories,
    0
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today&apos;s Meals</Text>

        <Text style={styles.count}>
          {totalCalories} kcal
        </Text>
      </View>

      {todaysMeals.map((meal) => (
        <MealCard
          key={meal.id}
          meal={meal}
          onPress={() => {
            console.log('Selected meal:', meal.name);
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },

  title: {
    color: colors.text,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.lg,
  },

  count: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
  },
});