import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="name"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="goal"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="bestie"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}