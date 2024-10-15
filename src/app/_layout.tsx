import 'react-native-reanimated';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import tokenCache from '@/utils/token-cache';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@/hooks';
import { Routes } from '@/@types/routes';
import { retriveData } from '@/utils';
import StorageKeys from '@/constants/storage-keys';
import LangCodes from '@/constants/lang-codes';
import i18n from '../../i18n/scripts/init';
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
  const [langLoaded, setLangLoaded] = useState(false);

  useEffect(() => {
    retriveData(StorageKeys.LANG, LangCodes.PT_BR)
      .then((langCode) => {
        i18n.changeLanguage(langCode);
      })
      .catch(() => {
        i18n.changeLanguage(LangCodes.PT_BR);
      })
      .finally(() => setLangLoaded(true));
  }, []);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded && langLoaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, langLoaded]);

  if (!loaded || !langLoaded) {
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
