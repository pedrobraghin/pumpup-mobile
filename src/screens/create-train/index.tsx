import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { Input, PrimaryButton, WeekdaySelector } from '@/components';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { useState } from 'react';

export function CreateTrainScreen() {
  const { t } = useTranslation('create_train');
  const [weekday, setWeekday] = useState<string>();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          {t('page_title')}
        </Text>
        <Input placeholder={t('placeholder')} label={t('input_label')} />
        <WeekdaySelector onSelect={setWeekday} />
      </View>
      <PrimaryButton title={t('primary_button')} />
    </SafeAreaView>
  )
}