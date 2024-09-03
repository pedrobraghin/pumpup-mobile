import { create } from "zustand";
import { TrainingStoreState } from "./types";
import {
  addExercise,
  addSerie,
  removeExercise,
  removeSerie,
  updateSerie,
} from "./actions";

const exercisesMock = [
  {
    exercise: {
      image: "https://github.com/pedrobraghin.png",
      description: "Bíceps",
      name: "Rosca direta com barra 1",
      id: "1",
      type: "muscle",
    },
    pauseTime: 120,
    series: [
      {
        id: "123",
        previousWeight: 5,
        repetitions: 10,
        weight: 8,
        type: "work",
        finalized: false,
      },
    ],
  },
  {
    exercise: {
      image: "https://github.com/pedrobraghin.png",
      description: "Bíceps",
      name: "Rosca scott",
      id: "2",
      type: "muscle",
    },
    pauseTime: 60,
    series: [],
  },
];

export const useTrainingStore = create<TrainingStoreState>()((set) => ({
  exercises: exercisesMock,
  addExercise: (data) => set((state) => addExercise(state, data)),
  removeExercise: (id) => set((state) => removeExercise(state, id)),
  removeSerie: (exerciseId, serieId) =>
    set((state) => removeSerie(state, exerciseId, serieId)),
  setExercises: (data) => set(() => ({ exercises: data })),
  addSerie: (exerciseId) => set((state) => addSerie(state, exerciseId)),
  updateSerie: (exerciseId, serieId, data) =>
    set((state) => updateSerie(state, exerciseId, serieId, data)),
}));
