import { useFonts } from 'expo-font';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { OnboardingProvider } from '@/contexts/onboarding-context';

import { nutriLightTheme } from '@/theme/navigation';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),      
  'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
});
if (!fontsLoaded) {
  return null;
}
  return (
    <ThemeProvider value={nutriLightTheme}>
      <OnboardingProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{ presentation: 'modal', title: 'Modal' }}
          />
        </Stack>
        <StatusBar style="auto" />
      </OnboardingProvider>
    </ThemeProvider>
  );
}
