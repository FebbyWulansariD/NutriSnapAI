import { StyleSheet, Text, View } from 'react-native';

import { MealCard } from '@/components/home/MealCard';
import { colors, spacing, typography } from '@/theme';

type Meal = {
  id: string;
  emoji: string;
  name: string;
  mealType: string;
  time: string;
  calories: number;
};

const meals: Meal[] = [
  {
    id: '1',
    emoji: '🍚',
    name: 'Nasi + Ayam Goreng',
    mealType: 'Lunch',
    time: '12:30',
    calories: 520,
  },
  {
    id: '2',
    emoji: '🍌',
    name: 'Pisang',
    mealType: 'Snack',
    time: '15:20',
    calories: 105,
  },
];

export function TodaysMeals() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today&apos;s Meals</Text>

        <Text style={styles.count}>
          {meals.length} meals
        </Text>
      </View>

      {meals.map((meal) => (
        <MealCard
          key={meal.id}
          emoji={meal.emoji}
          name={meal.name}
          mealType={meal.mealType}
          time={meal.time}
          calories={meal.calories}
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