import { ScrollView, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';

import { BestieGreeting } from '@/components/home/BestieGreeting';
import { GreetingHeader } from '@/components/home/GreetingHeader';
import { NutritionSummary } from '@/components/home/NutritionSummary';
import { QuickActions } from '@/components/home/QuickActions';
import { WaterProgress } from '@/components/home/WaterProgress';
import { useOnboarding } from '@/contexts/onboarding-context';
import { colors, spacing, typography } from '@/theme';

export default function HomeScreen() {
  const { data } = useOnboarding();

  const displayName = data.name || 'Bestie';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      <GreetingHeader
        name={displayName}
        onNotificationPress={() => {
          console.log('Notifications pressed');
        }}
      />

      <BestieGreeting
        name={data.bestie || 'Pinkie'}
        emoji="🎀"
        message="Ready to check what you eat today?"
      />

      <NutritionSummary
        consumedCalories={820}
        targetCalories={1800}
      />

      <QuickActions
        onScanPress={() => {
          router.push('/(tabs)/scan');
        }}
        onAddMealPress={() => {
          router.push('/(tabs)/diary');
        }}
      />

      <Text style={styles.sectionTitle}>Today&apos;s Meals</Text>

      <Text style={styles.placeholderText}>
        Your meals will appear here once you start tracking them. 🍽️
      </Text>

      <WaterProgress
        glasses={4}
        target={8}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  contentContainer: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxxl,
  },

  sectionTitle: {
    color: colors.text,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.lg,
    marginBottom: spacing.md,
  },

  placeholderText: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    lineHeight: 20,
    marginBottom: spacing.xl,
  },
});