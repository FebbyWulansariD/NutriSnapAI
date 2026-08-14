import { ScrollView, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';

import { BestieGreeting } from '@/components/home/BestieGreeting';
import { GreetingHeader } from '@/components/home/GreetingHeader';
import { NutritionSummary } from '@/components/home/NutritionSummary';
import { QuickActions } from '@/components/home/QuickActions';
import { WaterProgress } from '@/components/home/WaterProgress';
import { useOnboarding } from '@/contexts/onboarding-context';
import { colors, spacing, typography } from '@/theme';
import { TodaysMeals } from '@/components/home/TodaysMeals';
import { besties } from '@/constants/besties';

export default function HomeScreen() {
  const { data } = useOnboarding();
  const selectedBestie =
    besties.find((bestie) => bestie.id === data.bestie) ??
    besties[0];

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
        name={selectedBestie.name}
        emoji={selectedBestie.emoji}
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

      <TodaysMeals />

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
});