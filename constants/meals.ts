import type { Meal } from '@/types/meal';

export const todaysMeals: Meal[] = [
  {
    id: 'meal-001',
    name: 'Nasi + Ayam Goreng',
    mealType: 'lunch',
    time: '12:30',
    emoji: '🍚',
    nutrition: {
      calories: 520,
      protein: 24,
      carbohydrates: 58,
      fat: 20,
    },
  },
  {
    id: 'meal-002',
    name: 'Pisang',
    mealType: 'snack',
    time: '15:20',
    emoji: '🍌',
    nutrition: {
      calories: 105,
      carbohydrates: 27,
      fiber: 3,
    },
  },
];