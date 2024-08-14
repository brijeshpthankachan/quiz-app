import { create } from "zustand";

type QuizState = {
  hasStarted: boolean;
  currentIndex: number;
  maxIndex: number;
  shouldResetTimer: boolean;
  isNextButtonDisabled: boolean;
  startQuiz: () => void;
  nextQuestion: () => void;
  disableNextButton: () => void;
  resetTimer: () => void;
  setMaxIndex: (arg1: number) => void;
  selectedAnswer: string | null;
  setSelectedAnswer: (answer: string) => void;
  resetAnswer: () => void;
};

export const useQuizStore = create<QuizState>((set) => ({
  hasStarted: false,
  currentIndex: 0,
  maxIndex: 0,
  shouldResetTimer: false,
  isNextButtonDisabled: false,
  selectedAnswer: null,

  startQuiz: () => set({ hasStarted: true }),
  setMaxIndex: (maxIndex: number) => set({ maxIndex: maxIndex }),
  nextQuestion: () =>
    set((state) => ({
      currentIndex: state.currentIndex + 1,
      shouldResetTimer: !state.shouldResetTimer,
      isNextButtonDisabled: state.currentIndex === state.maxIndex - 2,
    })),

  disableNextButton: () => set({ isNextButtonDisabled: true }),

  resetTimer: () =>
    set((state) => ({ shouldResetTimer: !state.shouldResetTimer })),
  setSelectedAnswer: (answer: string) => set({ selectedAnswer: answer }),
  resetAnswer: () => set({ selectedAnswer: null }),
}));
