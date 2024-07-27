import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { RadioButton } from '../radio-button';
import { useTranslation } from 'react-i18next';
import { WeekdaySelectorProps } from './types';
import { weekdays } from './consts';

export function WeekdaySelector({ onSelect }: Readonly<WeekdaySelectorProps>) {
  const { t } = useTranslation('create_train');

  const [weekday, setWeekday] = useState<string>('');

  function verifyIsChecked(value: string) {
    return value === weekday;
  }

  function handleSelect(value: string) {
    onSelect(value)
    setWeekday(value);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {t('weekday')}
      </Text>
      <View style={styles.weekdaysContainer}>
        {weekdays.map((w, i) => {
          const label = t(w);
          const value = weekdays[i];

          return (
            <RadioButton
              key={w}
              checked={verifyIsChecked(value)}
              onPress={handleSelect}
              value={value}
              label={label}
            />
          )
        })}
      </View>
    </View>
  );
}