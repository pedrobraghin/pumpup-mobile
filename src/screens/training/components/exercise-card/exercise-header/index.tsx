import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { ExerciseHeaderProps } from '../types';
import { SquareButton } from '@/components/square-button';
import { exerciseHeaderStyles } from './styles';
import { useCallback } from 'react';
import { useTrainingStore } from '@/lib/zustand/stores';

export function ExerciseHeader({
  exerciseDescription,
  exerciseImage,
  exerciseName,
  exerciseId,
}: Readonly<ExerciseHeaderProps>) {
  const { addSerie } = useTrainingStore();
  const { t } = useTranslation('training');

  const handleAddSerie = useCallback(() => {
    addSerie(exerciseId)
  }, []);

  return (
    <View style={exerciseHeaderStyles.container}>
      <View style={exerciseHeaderStyles.imageContainer}>
        <Image source={{
          uri: exerciseImage
        }}
          style={exerciseHeaderStyles.image}
        />
      </View>
      <View style={exerciseHeaderStyles.contentContainer}>
        <Text style={exerciseHeaderStyles.exerciseName}>
          {exerciseName}
        </Text>
        <Text style={exerciseHeaderStyles.exerciseDescription}>
          {exerciseDescription}
        </Text>
      </View>
      <View style={exerciseHeaderStyles.buttonContainer}>
        <SquareButton
          title={t('exercise.header.button_text')}
          onPress={handleAddSerie}
          iconName='plus'
          style={{ paddingHorizontal: 10 }}
        />
      </View>
    </View>
  )
}