import { Button } from "@/components/ui/button";
import { BASE_POINT } from "@/configs/app.config";
import { flags } from "@/data/mocks";
import { useQuizStore } from "@/hooks/quiz-state";
import { CircleCheck, CircleX } from "lucide-react";

const Answers = () => {
  const { currentIndex, selectedAnswer, setSelectedAnswer, addPoints,setCorrectAnswer } =
    useQuizStore();

  return (
    <div className="grid grid-cols-1 gap-2 w-full pt-10 md:grid-cols-2 lg:w-[50%]">
      {flags[currentIndex].answers.map((answer) => (
        <Button
          key={answer}
          size="lg"
          variant="outline"
          className="relative w-full px-2 capitalize dark:bg-stone-800"
          onClick={() => {
            setSelectedAnswer(answer);
            if (answer === flags[currentIndex].country) {
              addPoints(BASE_POINT);
              setCorrectAnswer()
            }
          }}
          disabled={selectedAnswer !== null && answer !== selectedAnswer}
        >
          <span className="w-full text-center">{answer}</span>
          {selectedAnswer === flags[currentIndex].country &&
            answer === selectedAnswer && (
              <CircleCheck
                className="absolute right-2 animate-fade animate-duration-500 animate-ease-in-out"
                color="green"
              />
            )}
          {selectedAnswer !== flags[currentIndex].country &&
            answer === selectedAnswer && (
              <CircleX
                className="absolute right-2 animate-fade animate-duration-500 animate-ease-in-out"
                color="red"
              />
            )}
        </Button>
      ))}
    </div>
  );
};

export default Answers;
