import 'react-native-reanimated';
import '../../i18n/scripts/init';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import tokenCache from '@/utils/token-cache';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@/hooks';
import { Routes } from '@/@types/routes';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '/home',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView>
      <ClerkProvider
        publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
        tokenCache={tokenCache}
      >
        <ThemeProvider value={DefaultTheme}>
          <InitialLayout />
        </ThemeProvider>
      </ClerkProvider>
    </GestureHandlerRootView>
  );
}

function InitialLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const { navigate } = useNavigation();

  useEffect(() => {
    console.log(isLoaded, isSignedIn);

    if (!isLoaded) return;

    if (isSignedIn) {
      navigate(Routes.home);
    } else {
      navigate(Routes.login);
    }
  }, [isLoaded, isSignedIn]);

  return isLoaded ? (
    <Slot />
  ) : (
    <ActivityIndicator
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    />
  );
}
