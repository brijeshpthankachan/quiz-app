import { Button } from "@/components/ui/button";
import { flags } from "@/data/mocks";
import { useQuizStore } from "@/hooks/quiz-state";
import { ArrowRight } from "lucide-react";

const SubmitButton = () => {
  const { currentIndex, selectedAnswer, nextQuestion, setShouldShowResults } =
    useQuizStore();

  if (!selectedAnswer) return null;

  return currentIndex === flags.length - 1 ? (
    <Button
      size="lg"
      variant="outline"
      className="w-full mt-4 flex items-center gap-2 font-bold dark:bg-stone-800 lg:w-[50%] animate-fade animate-duration-500 animate-ease-in-out"
      onClick={() => {
        setShouldShowResults(true);
      }}
    >
      See Results
      <ArrowRight />
    </Button>
  ) : (
    <Button
      size="lg"
      variant="outline"
      className="w-full mt-4 flex items-center gap-2 font-bold dark:bg-stone-800 lg:w-[50%] animate-fade animate-duration-500 animate-ease-in-out"
      onClick={() => nextQuestion()}
    >
      Next
      <ArrowRight />
    </Button>
  );
};

export default SubmitButton;
