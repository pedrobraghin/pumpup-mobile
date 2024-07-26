import { Text, View } from 'react-native';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { CircleButton } from '@/components';
import { useRouter } from 'expo-router';
import { Routes } from '@/@types/routes';

export function EmptyContent() {
  const { t } = useTranslation('home');
  const router = useRouter();

  function redirectToCreateTraining() {
    router.push(Routes.searchExercise);
  }

  return (
    <View style={styles.contentContainer}>
      <View style={styles.tipsContainer}>
        <Text style={styles.tip}>
          {t('tip_1')}
        </Text>
        <Text style={styles.tip}>
          {t('tip_2')}
        </Text>
      </View>
      <CircleButton onPress={redirectToCreateTraining} />
    </View>
  )
}