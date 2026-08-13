import { useState } from 'react';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { useOnboarding } from '@/contexts/onboarding-context';
import { colors, radius, spacing, typography } from '@/theme';

export default function NameOnboarding() {
  const { data, setName } = useOnboarding();

  const handleContinue = () => {
    if (!data.name.trim()) {
      return;
    }

    router.push('/onboarding/goal');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>1 of 3</Text>

      <View style={styles.content}>
        <Text style={styles.emoji}>👋</Text>

        <Text style={styles.title}>Let's get to know you!</Text>

        <Text style={styles.subtitle}>
          What should your Bestie call you?
        </Text>

        <TextInput
          value={data.name}
          onChangeText={setName}
          placeholder="Your name"
          placeholderTextColor={colors.textSecondary}
          style={styles.input}
          autoCapitalize="words"
          autoCorrect={false}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={handleContinue}>
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
    justifyContent: 'space-between',
  },

  progress: {
    color: colors.primary,
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
  },

  content: {
    alignItems: 'center',
  },

  emoji: {
    fontSize: 60,
    marginBottom: spacing.xl,
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
    textAlign: 'center',
    marginBottom: spacing.xl,
  },

  input: {
    width: '100%',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    color: colors.text,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
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