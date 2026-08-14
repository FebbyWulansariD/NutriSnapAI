import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/theme';

type WaterProgressProps = {
  glasses: number;
  target: number;
};

export function WaterProgress({
  glasses,
  target,
}: WaterProgressProps) {
  const progress = Math.min(glasses / target, 1);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Water</Text>

          <Text style={styles.subtitle}>
            Stay hydrated, bestie 💧
          </Text>
        </View>

        <Text style={styles.count}>
          {glasses}/{target}
        </Text>
      </View>

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${progress * 100}%`,
            },
          ]}
        />
      </View>

      <Text style={styles.caption}>
        {target - glasses > 0
          ? `${target - glasses} glasses left today`
          : 'Hydration goal completed! 🎉'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.xl,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: colors.text,
    fontFamily: typography.fontFamily.semibold,
    fontSize: typography.fontSize.lg,
  },

  subtitle: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    marginTop: 2,
  },

  count: {
    color: colors.accent,
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xl,
  },

  progressTrack: {
    height: 10,
    backgroundColor: '#F0E8FB',
    borderRadius: radius.full,
    overflow: 'hidden',
    marginTop: spacing.lg,
  },

  progressFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: radius.full,
  },

  caption: {
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    marginTop: spacing.md,
  },
});