import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/theme';

type GreetingHeaderProps = {
  name: string;
  onNotificationPress: () => void;
};

function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return 'Good morning';
  }

  if (hour >= 12 && hour < 18) {
    return 'Good afternoon';
  }

  return 'Good evening';
}

export function GreetingHeader({
  name,
  onNotificationPress,
}: GreetingHeaderProps) {
    const greeting = getGreeting();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>{greeting}, {name} 💗</Text>

        <Text style={styles.subtitle}>
          Ready to take care of yourself today?
        </Text>
      </View>

      <Pressable
        onPress={onNotificationPress}
        style={({ pressed }) => [
          styles.notificationButton,
          pressed && styles.pressed,
        ]}>
        <Text style={styles.notificationIcon}>🔔</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },

  textContainer: {
    flex: 1,
    paddingRight: spacing.md,
  },

  greeting: {
    color: colors.text,
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xl,
    marginBottom: spacing.xs,
  },

  subtitle: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
  },

  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationIcon: {
    fontSize: 20,
  },

  pressed: {
    opacity: 0.75,
  },
});