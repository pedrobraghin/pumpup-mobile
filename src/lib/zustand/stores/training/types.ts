import { Exercise } from "@/@types/exercise";
import { SerieData } from "@/screens/training/components/exercise-card/types";

export type ExerciseState = {
  series: SerieData[];
  exercise: Exercise;
  pauseTime: number;
};

export type TrainingStoreState = {
  exercises: ExerciseState[];
  addExercise: (data: Exercise) => void;
  removeSerie: (exerciseId: string, serieId: string) => void;
  removeExercise: (id: string) => void;
  setExercises: (data: ExerciseState[]) => void;
  addSerie: (exerciseId: string) => void;
  updateSerie: (
    exerciseId: string,
    serieId: string,
    data: Partial<SerieData>
  ) => void;
};
