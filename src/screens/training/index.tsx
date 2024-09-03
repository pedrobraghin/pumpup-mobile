import { ScrollView, Text, View } from 'react-native';
import { ExerciseCard, BottomBar } from './components';
import { SafeView } from '@/components';
import { styles } from './styles';
import { useMemo } from 'react';
import { useTrainingStore } from '@/lib/zustand/stores';

export function TrainingScreen() {
  const { exercises } = useTrainingStore();

  const exerciseCards = useMemo(() => {
    return exercises.map(({ exercise, series, pauseTime }) => (
      <ExerciseCard
        exerciseDescription={exercise.description}
        exerciseName={exercise.name}
        exerciseImage={exercise.image}
        key={exercise.id}
        series={series}
        pauseTime={pauseTime}
        exerciseId={exercise.id}
      />
    ))
  }, [exercises])

  return (
    <SafeView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Costas e bíceps</Text>
          </View>
          <View style={styles.contentContainer}>
            {exerciseCards}
          </View>
        </View>
      </ScrollView>
      <BottomBar time='00:00' />
    </SafeView>
  )
}