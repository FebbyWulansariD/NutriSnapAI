import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

import { colors, radius, spacing, typography } from '@/theme';

type Goal = {
  id: string;
  emoji: string;
  title: string;
  description: string;
};

const goals: Goal[] = [
  {
    id: 'understand-food',
    emoji: '🍽️',
    title: 'Understand my food',
    description: 'Learn more about what I eat every day.',
  },
  {
    id: 'healthier-habits',
    emoji: '💧',
    title: 'Build healthier habits',
    description: 'Create small and realistic healthy habits.',
  },
  {
    id: 'maintain-lifestyle',
    emoji: '⚖️',
    title: 'Maintain my current lifestyle',
    description: 'Keep track of my eating habits consistently.',
  },
  {
    id: 'learn-nutrition',
    emoji: '📚',
    title: 'Learn about nutrition',
    description: 'Understand calories and nutrients more easily.',
  },
];

export default function GoalOnboarding() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((currentGoals) => {
      if (currentGoals.includes(goalId)) {
        return currentGoals.filter((id) => id !== goalId);
      }

      return [...currentGoals, goalId];
    });
  };

  const handleContinue = () => {
    if (selectedGoals.length === 0) {
      return;
    }

    console.log('Selected goals:', selectedGoals);

    router.push('/onboarding/bestie');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>2 of 3</Text>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.emoji}>🌱</Text>

          <Text style={styles.title}>
            What brings you here?
          </Text>

          <Text style={styles.subtitle}>
            Pick one or more goals that feel right for you.
          </Text>
        </View>

        <View style={styles.options}>
          {goals.map((goal) => {
            const isSelected = selectedGoals.includes(goal.id);

            return (
              <Pressable
                key={goal.id}
                onPress={() => toggleGoal(goal.id)}
                style={({ pressed }) => [
                  styles.card,
                  isSelected && styles.cardSelected,
                  pressed && styles.cardPressed,
                ]}>
                <View
                  style={[
                    styles.iconContainer,
                    isSelected && styles.iconContainerSelected,
                  ]}>
                  <Text style={styles.cardEmoji}>{goal.emoji}</Text>
                </View>

                <View style={styles.cardContent}>
                  <Text
                    style={[
                      styles.cardTitle,
                      isSelected && styles.cardTitleSelected,
                    ]}>
                    {goal.title}
                  </Text>

                  <Text style={styles.cardDescription}>
                    {goal.description}
                  </Text>
                </View>

                <View
                  style={[
                    styles.checkCircle,
                    isSelected && styles.checkCircleSelected,
                  ]}>
                  {isSelected && (
                    <Text style={styles.checkIcon}>✓</Text>
                  )}
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <Pressable
        disabled={selectedGoals.length === 0}
        onPress={handleContinue}
        style={({ pressed }) => [
          styles.button,
          selectedGoals.length === 0 && styles.buttonDisabled,
          pressed && selectedGoals.length > 0 && styles.buttonPressed,
        ]}>
        <Text style={styles.buttonText}>Continue</Text>
        <Text style={styles.buttonIcon}>→</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
  },

  progress: {
    color: colors.primary,
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
  },

  scrollContent: {
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
  },

  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  emoji: {
    fontSize: 56,
    marginBottom: spacing.lg,
  },

  title: {
    color: colors.text,
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xxl,
    textAlign: 'center',
    marginBottom: spacing.md,
  },

  subtitle: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    lineHeight: 24,
    textAlign: 'center',
  },

  options: {
    gap: spacing.md,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.md,
  },

  cardSelected: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },

  cardPressed: {
    opacity: 0.85,
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: radius.lg,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainerSelected: {
    backgroundColor: colors.surface,
  },

  cardEmoji: {
    fontSize: 26,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: colors.text,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.md,
    marginBottom: 4,
  },

  cardTitleSelected: {
    color: colors.primary,
  },

  cardDescription: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    lineHeight: 19,
  },

  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: radius.full,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkCircleSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  checkIcon: {
    color: colors.surface,
    fontFamily: typography.fontFamily.bold,
    fontSize: 14,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.full,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },

  buttonDisabled: {
    backgroundColor: colors.border,
  },

  buttonPressed: {
    opacity: 0.8,
  },

  buttonText: {
    color: colors.surface,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.md,
  },

  buttonIcon: {
    color: colors.surface,
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg,
  },
});