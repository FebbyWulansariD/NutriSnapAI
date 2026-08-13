import { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

import { colors, spacing, radius, typography } from '@/theme';

export default function WelcomeScreen() {
  const logoOpacity = useRef(new Animated.Value(1)).current;
  const logoScale = useRef(new Animated.Value(1.0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 700,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 6,
          tension: 50,
          useNativeDriver: true,
        }),
      ]),

      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),

      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [buttonOpacity, logoOpacity, logoScale, textOpacity]);

  return (
    <View style={styles.container}>
      <View style={styles.decorTop}>
        <Text style={styles.sparkle}>✦</Text>
        <Text style={styles.sparkleSmall}>✧</Text>
      </View>

      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoEmoji}>🍓</Text>
          <Text style={styles.logoHeart}>♥</Text>
        </View>

        <Text style={styles.logoText}>NutriSnap</Text>
        <Text style={styles.logoAi}>AI</Text>
      </Animated.View>

      <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
        <Text style={styles.title}>Your cute nutrition bestie 💗</Text>

        <Text style={styles.subtitle}>
          Understand your everyday Indonesian food{'\n'}
          with a little help from AI.
        </Text>
      </Animated.View>

      <Animated.View style={{ opacity: buttonOpacity }}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => {
            console.log('Get Started pressed');
          }}>
          <Text style={styles.buttonText}>Let&apos;s Get Started</Text>
          <Text style={styles.buttonIcon}>→</Text>
        </Pressable>
      </Animated.View>

      <Text style={styles.footer}>AI-powered nutrition companion</Text>

      <View style={styles.decorBottom}>
        <Text style={styles.bottomHeart}>♡</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },

  decorTop: {
    position: 'absolute',
    top: 90,
    right: 45,
  },

  sparkle: {
    color: colors.accent,
    fontSize: 30,
  },

  sparkleSmall: {
    color: colors.primary,
    fontSize: 18,
    position: 'absolute',
    left: -18,
    top: 24,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },

  logoCircle: {
    width: 150,
    height: 150,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.surface,
    marginBottom: spacing.lg,
  },

  logoEmoji: {
    fontSize: 64,
  },

  logoHeart: {
    position: 'absolute',
    right: 28,
    bottom: 24,
    color: colors.primary,
    fontSize: 22,
  },

  logoText: {
    color: colors.text,
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.display,
  },

  logoAi: {
    color: colors.primary,
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xl,
    marginTop: -6,
  },

  textContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },

  title: {
    color: colors.text,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.lg,
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
    minWidth: 230,
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
    transform: [{ scale: 0.98 }],
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

  footer: {
    position: 'absolute',
    bottom: 35,
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
  },

  decorBottom: {
    position: 'absolute',
    bottom: 100,
    left: 35,
  },

  bottomHeart: {
    color: colors.primaryLight,
    fontSize: 52,
  },
});