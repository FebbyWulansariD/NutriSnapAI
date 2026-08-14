export type MealType =
  | 'breakfast'
  | 'lunch'
  | 'dinner'
  | 'snack';

export type NutritionInfo = {
  calories: number;
  protein?: number;
  carbohydrates?: number;
  fat?: number;
  fiber?: number;
};

export type Meal = {
  id: string;
  name: string;
  mealType: MealType;
  time: string;
  emoji: string;
  nutrition: NutritionInfo;
};