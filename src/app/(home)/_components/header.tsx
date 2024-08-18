import { useQuizStore } from "@/hooks/quiz-state";
import Timer from "./timer";

const QuizHeader = () => {
  const { currentIndex, maxIndex } = useQuizStore();

  return (
    <div className="h-[67px] p-2 flex items-center border-b border-b-blue-100 justify-between md:px-7">
      <p className="capitalize font-semibold hidden lg:block">
        name that world flag!
      </p>
      <div className="flex items-center gap-3 w-full lg:w-auto justify-between">
        <Timer />
        <p>
          {currentIndex + 1} of {maxIndex}
        </p>
        <p>Score : 0</p>
      </div>
    </div>
  );
};

export default QuizHeader;
