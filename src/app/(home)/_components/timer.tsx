import CircularProgressBar from "@/components/ui/radial-progress";
import { flags } from "@/data/mocks";
import { useQuizStore } from "@/hooks/quiz-state";
import useTimer from "@/hooks/timer";

const Timer = () => {
  const { setSelectedAnswer, currentIndex } = useQuizStore();
  const { timeLeft, isTimeUp } = useTimer({
    onTimeUp: () => setSelectedAnswer(flags[currentIndex].country),
  });

  return (
    <div className="flex items-center">
      {isTimeUp && (
        <span className="w-[100px] h-[20px] px-2 text-sm text-white bg-red-700 rounded-xl lg:rounded-r-none order-last lg:order-first -ml-3 lg:-mr-1 lg:ml-0 z-0 animate-fade-up duration-500 text-center">
          Time&apos;s up!
        </span>
      )}
      <CircularProgressBar
        progress={timeLeft}
        width={55}
        height={55}
        stroke={6}
      />
    </div>
  );
};

export default Timer;
