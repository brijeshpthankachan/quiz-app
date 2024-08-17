import { Observable, interval } from "rxjs";
import { create } from "zustand";

type QuizState = {
  hasStarted: boolean;
  currentIndex: number;
  maxIndex: number;
  startQuiz: () => void;
  nextQuestion: () => void;
  setMaxIndex: (arg1: number) => void;
  selectedAnswer: string | null;
  setSelectedAnswer: (answer: string) => void;
  pulse: Observable<number>;
};

export const useQuizStore = create<QuizState>((set) => ({
  hasStarted: false,
  currentIndex: 0,
  maxIndex: 0,
  shouldResetTimer: false,
  selectedAnswer: null,
  pulse: interval(1000),

  startQuiz: () => set({ hasStarted: true }),
  setMaxIndex: (maxIndex: number) => set({ maxIndex: maxIndex }),
  nextQuestion: () =>
    set((state) => ({
      currentIndex: state.currentIndex + 1,
      isNextButtonDisabled: state.currentIndex === state.maxIndex - 2,
      selectedAnswer: null,
    })),

  setSelectedAnswer: (answer: string) => set({ selectedAnswer: answer }),
}));
