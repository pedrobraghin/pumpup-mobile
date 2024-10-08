import { Button, Text } from 'react-native';
import { useOAuth } from '@clerk/clerk-expo';
import { useCallback, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { SafeScrollView } from '@/components';

WebBrowser.maybeCompleteAuthSession();

export function AuthenticationScreen() {
  const googleOAuth = useOAuth({ strategy: 'oauth_google' });

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
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  });

  return (
    <SafeScrollView>
      <Text>
        Tela de cadastro/login
        <Button onPress={onGoogleSignIn} title="Entrar com o google" />
      </Text>
    </SafeScrollView>
  );
}
