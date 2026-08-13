import { router } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors, radius, spacing, typography } from '@/theme';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      return;
    }

    console.log('Login attempt:', email);

    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.emoji}>💗</Text>

        <Text style={styles.title}>
          Welcome back, bestie!
        </Text>

        <Text style={styles.subtitle}>
          Let&apos;s continue your nutrition journey.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            placeholderTextColor={colors.textSecondary}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Your password"
            placeholderTextColor={colors.textSecondary}
            secureTextEntry
            style={styles.input}
          />
        </View>
      </View>

      <View>
        <Pressable
          disabled={!email.trim() || !password.trim()}
          onPress={handleLogin}
          style={({ pressed }) => [
            styles.button,
            (!email.trim() || !password.trim()) &&
              styles.buttonDisabled,
            pressed &&
              email.trim() &&
              password.trim() &&
              styles.buttonPressed,
          ]}>
          <Text style={styles.buttonText}>Log In</Text>

          <Text style={styles.buttonIcon}>→</Text>
        </Pressable>

        <Pressable
          onPress={() => router.replace('/auth/register')}
          style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>
            Don&apos;t have an account?{' '}
            <Text style={styles.secondaryHighlight}>
              Create one
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxxl,
    paddingBottom: spacing.xl,
  },

  emoji: {
    fontSize: 54,
    marginBottom: spacing.lg,
  },

  title: {
    color: colors.text,
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xxl,
    marginBottom: spacing.md,
  },

  subtitle: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    lineHeight: 24,
    marginBottom: spacing.xxl,
  },

  form: {
    gap: spacing.md,
  },

  label: {
    color: colors.text,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.sm,
  },

  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    color: colors.text,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    marginBottom: spacing.md,
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

  secondaryButton: {
    alignItems: 'center',
    paddingTop: spacing.lg,
  },

  secondaryText: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
  },

  secondaryHighlight: {
    color: colors.primary,
    fontFamily: typography.fontFamily.semibold,
  },
});