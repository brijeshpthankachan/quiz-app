import { useQuizStore } from "@/hooks/quiz-state";
import Answers from "./answers";
import Flag from "./flag";
import ScoreBoard from "./score-board";
import SubmitButton from "./submit-button";

const QuizBody = () => {
  const { shouldShowResults } = useQuizStore();

  return (
    <div className="flex flex-col items-center w-full px-4 gap-2 pt-16 flex-1">
      {!shouldShowResults && (
        <>
          <Flag />
          <Answers />
          <SubmitButton />
        </>
      )}
      {shouldShowResults && <ScoreBoard />}
    </div>
  );
};

export default QuizBody;
