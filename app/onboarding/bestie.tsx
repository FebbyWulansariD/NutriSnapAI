import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { BestieCard } from '@/components/bestie/BestieCard';
import { useOnboarding } from '@/contexts/onboarding-context';
import { colors, radius, spacing, typography } from '@/theme';

type Bestie = {
  id: string;
  emoji: string;
  name: string;
  description: string;
};

const besties: Bestie[] = [
  {
    id: 'pinkie',
    emoji: '🎀',
    name: 'Pinkie',
    description: 'Cheerful, sweet, and always ready to support you.',
  },
  {
    id: 'cozzy',
    emoji: '🐻',
    name: 'Cozzy',
    description: 'Calm, caring, and great for gentle encouragement.',
  },
  {
    id: 'bunni',
    emoji: '🐰',
    name: 'Bunni',
    description: 'Playful, energetic, and loves celebrating small wins.',
  },
];

export default function BestieOnboarding() {
  const { data, setBestie } = useOnboarding();

  const handleContinue = () => {
    if (!data.bestie) {
      return;
    }

    console.log('Completed onboarding:', data);

    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>3 of 3</Text>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.emoji}>💗</Text>

          <Text style={styles.title}>Choose your Bestie</Text>

          <Text style={styles.subtitle}>
            Pick a little companion to join you on your nutrition journey.
          </Text>
        </View>

        <View>
          {besties.map((bestie) => (
            <BestieCard
              key={bestie.id}
              emoji={bestie.emoji}
              name={bestie.name}
              description={bestie.description}
              selected={data.bestie === bestie.id}
              onPress={() => setBestie(bestie.id)}
            />
          ))}
        </View>
      </ScrollView>

      <Pressable
        disabled={!data.bestie}
        onPress={handleContinue}
        style={({ pressed }) => [
          styles.button,
          !data.bestie && styles.buttonDisabled,
          pressed && data.bestie && styles.buttonPressed,
        ]}>
        <Text style={styles.buttonText}>Meet My Bestie</Text>
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