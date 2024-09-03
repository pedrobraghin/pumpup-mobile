import { TrainingStoreState } from "./types";
import { Exercise } from "@/@types/exercise";
import { SerieData } from "@/screens/training/components/exercise-card/types";
import uuid from "react-native-uuid";

export function addExercise(
  state: TrainingStoreState,
  data: Exercise
): Partial<TrainingStoreState> {
  return {
    exercises: [
      ...state.exercises,
      // modificar o pause time talvez, ou criar uma const em outro arquivo
      { exercise: data, series: [], pauseTime: 60 },
    ],
  };
}

export function removeExercise(
  state: TrainingStoreState,
  id: string
): Partial<TrainingStoreState> {
  const exercises = state.exercises.filter((e) => e.exercise.id !== id);

  return {
    exercises,
  };
}

export function addSerie(
  state: TrainingStoreState,
  exerciseId: string
): Partial<TrainingStoreState> {
  const index = state.exercises.findIndex((e) => e.exercise.id === exerciseId);

  if (index === -1) {
    return {};
  }

  const updatedExercises = [...state.exercises];
  const id = uuid.v4().toString().slice(0, 8);

  updatedExercises[index] = {
    ...updatedExercises[index],
    series: [
      ...updatedExercises[index].series,
      {
        id,
        previousWeight: 0,
        repetitions: 0,
        weight: 0,
        type: "work",
        finalized: false,
      },
    ],
  };

  return {
    exercises: updatedExercises,
  };
}

export function removeSerie(
  state: TrainingStoreState,
  exerciseId: string,
  serieId: string
): Partial<TrainingStoreState> {
  const index = state.exercises.findIndex((e) => e.exercise.id === exerciseId);

  if (index === -1) {
    return {};
  }

  const updatedExercises = [...state.exercises];

  const updatedSeries = updatedExercises[index].series.filter(
    (serie) => serie.id !== serieId
  );

  if (updatedSeries.length === updatedExercises[index].series.length) {
    return {};
  }

  updatedExercises[index] = {
    ...updatedExercises[index],
    series: updatedSeries,
  };

  return {
    exercises: updatedExercises,
  };
}

export function updateSerie(
  state: TrainingStoreState,
  exerciseId: string,
  serieId: string,
  data: Partial<SerieData>
): Partial<TrainingStoreState> {
  const index = state.exercises.findIndex((e) => e.exercise.id === exerciseId);

  if (index === -1) {
    return {};
  }

  const updatedExercises = [...state.exercises];

  const serieIndex = updatedExercises[index].series.findIndex(
    (s) => s.id === serieId
  );

  if (serieIndex === -1) {
    return {};
  }

  const serie = updatedExercises[index].series[serieIndex];

  updatedExercises[index].series[serieIndex] = {
    ...serie,
    ...data,
  };

  return {
    exercises: updatedExercises,
  };
}
