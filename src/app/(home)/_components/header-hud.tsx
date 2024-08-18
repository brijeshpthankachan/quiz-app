import { useQuizStore } from "@/hooks/quiz-state";
import Timer from "./timer";

export const Hud = () => {
  const { currentIndex, maxIndex } = useQuizStore();

  return (
    <>
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
    </>
  );
};

export default Hud;
