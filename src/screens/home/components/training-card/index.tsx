import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { PrimaryButton } from '@/components';
import { TrainingCardProps } from './types';
import { weekdays } from '@/components/weekday-selector/consts';
import { useCallback, useMemo } from 'react';
import { useRouter } from 'expo-router';
import { Routes } from '@/@types/routes';

export function TrainingCard({
  description,
  title,
  weekday,
  image,
  exercicesCount = 0,
}: Readonly<TrainingCardProps>) {
  const { t } = useTranslation('home');
  const router = useRouter();

  const formmatedDay = useMemo(() => {
    const today = new Date().getDay();

    if (weekday === today) {
      return t('today');
    }

    if (weekday === (today + 1)) {
      return t('tomorrow')
    }

    return t(weekdays[weekday]);
  }, [weekday, t]);

  const imageSource = useMemo(() => {
    if (image) {
      return {
        uri: image,
      }
    }

    return require('../../../../../assets/images/default-training-card-image.jpg')
  }, [image]);

  const handlePress = useCallback(() => {
    router.push(Routes.searchExercise);
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
    >
      <View style={styles.leftContainer}>
        <Text style={styles.label}>
          {formmatedDay}
        </Text>
        <Image
          source={imageSource}
          style={styles.image}
        />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.titleContainer}>
          <Text
            style={styles.titleOne}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {t('exercises', { count: exercicesCount })}
          </Text>
          <Text
            style={styles.titleTwo}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {title}
          </Text>
        </View>
        <Text
          style={styles.description}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {description}
        </Text>
        <PrimaryButton
          title={t('start')}
          medium
          disabled={!exercicesCount}
        />
      </View>
    </TouchableOpacity>
  )
}