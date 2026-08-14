import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/theme';

type QuickActionsProps = {
  onScanPress: () => void;
  onAddMealPress: () => void;
};

export function QuickActions({
  onScanPress,
  onAddMealPress,
}: QuickActionsProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.row}>
        <Pressable
          onPress={onScanPress}
          style={({ pressed }) => [
            styles.action,
            pressed && styles.pressed,
          ]}>
          <View style={[styles.iconBox, styles.scanIconBox]}>
            <Text style={styles.icon}>📷</Text>
          </View>

          <Text style={styles.actionTitle}>Scan Food</Text>

          <Text style={styles.actionSubtitle}>
            Use AI
          </Text>
        </Pressable>

        <Pressable
          onPress={onAddMealPress}
          style={({ pressed }) => [
            styles.action,
            pressed && styles.pressed,
          ]}>
          <View style={[styles.iconBox, styles.mealIconBox]}>
            <Text style={styles.icon}>🍽️</Text>
          </View>

          <Text style={styles.actionTitle}>Add Meal</Text>

          <Text style={styles.actionSubtitle}>
            Manual entry
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: spacing.xl,
  },

  sectionTitle: {
    color: colors.text,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.lg,
    marginBottom: spacing.md,
  },

  row: {
    flexDirection: 'row',
    gap: spacing.md,
  },

  action: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: spacing.lg,
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },

  scanIconBox: {
    backgroundColor: colors.primaryLight,
  },

  mealIconBox: {
    backgroundColor: '#F0E8FB',
  },

  icon: {
    fontSize: 23,
  },

  actionTitle: {
    color: colors.text,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.md,
  },

  actionSubtitle: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    marginTop: 2,
  },

  pressed: {
    opacity: 0.8,
  },
});