type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type TrainingCardProps = {
  title: string;
  description: string;
  weekday: Weekday;
  image?: string;
  exercicesCount?: number;
};
