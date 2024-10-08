import { Button, Text } from 'react-native';
import { SafeScrollView } from '@/components';
import { useAuth } from '@clerk/clerk-expo';

export function ProfileScreen() {
  const { signOut } = useAuth();

  return (
    <SafeScrollView>
      <Text>Perfil</Text>
      <Button onPress={() => signOut()} title="Sair" />
    </SafeScrollView>
  );
}
