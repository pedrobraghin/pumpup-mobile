import { useCallback, useMemo } from 'react';
import { Serie } from '../exercise-serie';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ExerciseSeriesContainerProps, SerieProps } from '../types';
import { exerciseSeriesContainerStyles, exerciseSeriesHeaderStyles } from './styles';
import { useTrainingStore } from '@/lib/zustand/stores';
import { EmptySeriesContainer } from '../empty-series-container';

export function ExerciseSeriesContainer({
  series,
  exerciseId,
}: Readonly<ExerciseSeriesContainerProps>) {
  const { t } = useTranslation('training');
  const { updateSerie, removeSerie } = useTrainingStore();

  const headerLabels = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => (
      <Text style={exerciseSeriesHeaderStyles.colLabel} key={t(`exercise.serie_header.col_${i + 1}`)}>
        {t(`exercise.serie_header.col_${i + 1}`)}
      </Text>
    ));
  }, [t]);

  const handleUpdateSerie = useCallback((serieId: string, updates: Partial<SerieProps>) => {
    updateSerie(exerciseId, serieId, updates);
  }, [updateSerie, exerciseId]);

  const handleDeleteSerie = useCallback((id: string) => {
    removeSerie(exerciseId, id);
  }, []);

  const renderedSeries = useMemo(() => series.map((data, i) => (
    <Serie
      {...data}
      key={data.id}
      serieNumber={i + 1}
      handleFinalize={(value) => handleUpdateSerie(data.id, { finalized: value })}
      handleChangeWeight={(text) => handleUpdateSerie(data.id, { weight: text })}
      handleChangeRepetitions={(text) => handleUpdateSerie(data.id, { repetitions: text })}
      handleSetType={(type) => handleUpdateSerie(data.id, { type })}
      handleDeleteSerie={handleDeleteSerie}
    />
  )), [series, handleUpdateSerie, handleDeleteSerie]);

  return (
    <View style={exerciseSeriesContainerStyles.container}>
      <View style={exerciseSeriesHeaderStyles.headerContainer}>
        {headerLabels}
      </View>
      <View style={exerciseSeriesContainerStyles.seriesContainer}>
        {renderedSeries.length > 0 ? renderedSeries : <EmptySeriesContainer />}
      </View>
    </View>
  );
}
