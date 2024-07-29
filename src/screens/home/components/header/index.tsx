import { Image, Text, TouchableHighlight, View } from 'react-native';
import { styles } from './styles';
import { HeaderProps } from './types';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
import { Routes } from '@/@types/routes';

export function Header({ profileImage, username }: Readonly<HeaderProps>) {
  const { t } = useTranslation('home');
  const router = useRouter();

  function redirectToProfile() {
    router.push(Routes.profile)
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{t('header_title')}</Text>
        <Text style={styles.description}>{t('header_description', { username })}</Text>
      </View>
      <TouchableHighlight onPress={redirectToProfile}>
        <Image
          style={styles.image}
          source={{ uri: profileImage }}
        />
      </TouchableHighlight>
    </View>
  )
}