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
  points: number;
  correctAnswers: number;
  isTimerBonusEnabled: boolean;
};

export const useQuizStore = create<QuizState>((set) => ({
  hasStarted: false,
  currentIndex: 0,
  maxIndex: 0,
  selectedAnswer: null,
  points: 0,
  correctAnswers: 0,
  isTimerBonusEnabled: false,

  startQuiz: () => set({ hasStarted: true }),
  setMaxIndex: (maxIndex: number) => set({ maxIndex: maxIndex }),
  nextQuestion: () =>
    set((state) => ({
      currentIndex: state.currentIndex + 1,
      isNextButtonDisabled: state.currentIndex === state.maxIndex - 2,
      selectedAnswer: null,
    })),
  setSelectedAnswer: (answer: string) => set({ selectedAnswer: answer }),
  setPoints: (point = 300) => set({ points: point }),
}));
