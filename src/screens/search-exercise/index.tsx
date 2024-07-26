import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '@/components';
import { useTranslation } from 'react-i18next';

export function SearchExerciseScreen() {
  const { t } = useTranslation('search_exercise');


  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onChangeText={() => undefined} placeholder={t('placeholder')} />
    </SafeAreaView>
  )
}