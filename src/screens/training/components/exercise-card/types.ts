export type ExerciseHeaderProps = {
  exerciseName: string;
  exerciseDescription: string;
  exerciseImage: string;
  exerciseId: string;
};

export type ExerciseCardProps = ExerciseHeaderProps & {
  pauseTime: number;
  series: SerieData[];
  exerciseId: string;
};

export type SerieData = {
  type: string;
  previousWeight: number;
  weight: number;
  repetitions: number;
  id: string;
  finalized: boolean;
};

export type SerieProps = SerieData & {
  serieNumber: number;
  finalized?: boolean;
  handleFinalize: (value: boolean) => void;
  handleChangeWeight: (text: number) => void;
  handleChangeRepetitions: (text: number) => void;
  handleSetType: (type: string) => void;
  handleDeleteSerie: (id: string) => void;
};

export type ExerciseSeriesContainerProps = {
  series: SerieData[];
  exerciseId: string;
};
