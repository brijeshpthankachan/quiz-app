import { flags } from "@/data/mocks";
import { useQuizStore } from "@/hooks/quiz-state";
import useTimer from "@/hooks/timer";
import { timerClass } from "@/lib/styles";

const Timer = () => {
  const { setSelectedAnswer, currentIndex } = useQuizStore();
  const { timeLeft, isTimeUp } = useTimer({
    onTimeUp: () => setSelectedAnswer(flags[currentIndex].country),
  });

  return (
    <div className="flex items-center">
      {isTimeUp ? (
        <span className="bg-red-700 order-last lg:order-first w-[100px] text-center text-white px-2 rounded-xl text-sm lg:rounded-r-none -ml-3 lg:-mr-1 lg:ml-0 h-[20px] z-0 animate-fade-up duration-500">
          Time&apos;s up!
        </span>
      ) : null}
      <div
        className={`z-10 ${timerClass({
          timer: isTimeUp ? "finished" : "running",
        })}`}
      >
        {timeLeft}
      </div>
    </div>
  );
};

export default Timer;
