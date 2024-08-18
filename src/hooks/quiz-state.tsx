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
  shouldShowResults: boolean;
  setShouldShowResults: (arg1: boolean) => void;
  addPoints: (point: number) => void;
  setCorrectAnswer: () => void;
};

export const useQuizStore = create<QuizState>((set) => ({
  hasStarted: false,
  currentIndex: 0,
  maxIndex: 0,
  selectedAnswer: null,
  points: 0,
  correctAnswers: 0,
  isTimerBonusEnabled: false,
  shouldShowResults: false,

  startQuiz: () => set({ hasStarted: true }),
  setMaxIndex: (maxIndex) => set({ maxIndex: maxIndex }),
  setSelectedAnswer: (answer) => set({ selectedAnswer: answer }),
  addPoints: (point) => set((state) => ({ points: state.points + point })),
  setShouldShowResults: (arg1) => set({ shouldShowResults: arg1 }),
  setCorrectAnswer: () =>
    set((state) => ({ correctAnswers: state.correctAnswers + 1 })),
  nextQuestion: () =>
    set((state) => ({
      currentIndex: state.currentIndex + 1,
      isNextButtonDisabled: state.currentIndex === state.maxIndex - 2,
      selectedAnswer: null,
    })),
}));
