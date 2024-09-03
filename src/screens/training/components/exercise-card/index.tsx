import { useCallback } from 'react';
import { styles } from './styles';
import { Alert, View } from 'react-native';
import { ExerciseCardProps } from './types';
import { ExerciseTimer } from '@/components';
import { ExerciseHeader } from './exercise-header';
import { ExerciseSeriesContainer } from './exercise-series-container';

export function ExerciseCard({
  exerciseDescription,
  exerciseImage,
  exerciseName,
  pauseTime,
  exerciseId,
  series,
}: Readonly<ExerciseCardProps>) {
  const onFinish = useCallback(() => {
    Alert.alert('Tempo finalizado')
  }, [])

  return (
    <View style={styles.container}>
      <ExerciseHeader
        exerciseImage={exerciseImage}
        exerciseDescription={exerciseDescription}
        exerciseName={exerciseName}
        exerciseId={exerciseId}
      />
      <ExerciseTimer time={pauseTime} onFinish={onFinish} run={false} />
      <ExerciseSeriesContainer series={series} exerciseId={exerciseId} />
    </View>
  )
}