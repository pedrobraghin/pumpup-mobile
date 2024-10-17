import { Alert, ImageBackground, Text, View } from 'react-native';
import { useAuth, useOAuth } from '@clerk/clerk-expo';
import { useCallback, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Entypo from '@expo/vector-icons/Entypo';
import Colors from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import { GoogleIcon, LanguageSelector, SafeScrollView } from '@/components';
import { Routes } from '@/@types/routes';
import { useNavigation } from '@/hooks';

WebBrowser.maybeCompleteAuthSession();

export function AuthenticationScreen() {
  const googleOAuth = useOAuth({ strategy: 'oauth_google' });
  const { t } = useTranslation('login');
  const { isSignedIn, isLoaded } = useAuth();
  const { navigate } = useNavigation();

  const onGoogleSignIn = useCallback(async () => {
    try {
      const flow = await googleOAuth.startOAuthFlow();

      if (flow.authSessionResult?.type !== 'success') {
        return;
      }

      if (!flow.setActive) {
        return;
      }

      await flow.setActive({ session: flow.createdSessionId });
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      navigate(Routes.home);
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  });

  return (
    <SafeScrollView
      scrollContainerStyle={{
        paddingHorizontal: 0,
        paddingTop: 0,
        paddingBottom: 0,
      }}
      contentContainerStyle={{
        paddingBottom: 0,
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: process.env.EXPO_PUBLIC_LOGIN_IMAGE_URL }}
          style={styles.imageContainer}
          resizeMode="cover"
        >
          <TouchableOpacity
            style={styles.helpContainer}
            onPress={() => Alert.alert('Implementar tela de ajuda')}
          >
            <Text style={styles.helperText}>{t('top_text')}</Text>
            <Entypo name="help-with-circle" size={16} color={Colors.white} />
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={onGoogleSignIn} style={styles.button}>
              <GoogleIcon />
              <Text style={styles.buttonText}>{t('primary_button')}</Text>
              <View></View>
            </TouchableOpacity>
            <View style={styles.termsTextContainer}>
              <Text style={styles.termsTextOne}>{t('terms_text_1')}</Text>
              <TouchableOpacity
                onPress={() => Alert.alert('Implementar tela dos termos')}
              >
                <Text style={styles.termsTextTwo}>{t('terms_text_2')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <LanguageSelector />
          </View>
        </ImageBackground>
      </View>
    </SafeScrollView>
  );
}
