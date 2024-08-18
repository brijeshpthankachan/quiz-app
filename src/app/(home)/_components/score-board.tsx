import RadialProgressBar from "@/components/ui/radial-progress";
import { useQuizStore } from "@/hooks/quiz-state";

const ScoreBoard = () => {
  const { points, correctAnswers, maxIndex } = useQuizStore();

  const Child = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="font-extrabold text-3xl">
          {correctAnswers}/{maxIndex}
        </p>
        <p>{points}</p>
      </div>
    );
  };

  return (
    <div>
      <RadialProgressBar
        progress={15}
        width={200}
        height={200}
        child={<Child />}
        stroke={10}
      />
    </div>
  );
};

export default ScoreBoard;
