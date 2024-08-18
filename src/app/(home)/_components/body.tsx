import { Button } from "@/components/ui/button";
import { flags } from "@/data/mocks";
import { useQuizStore } from "@/hooks/quiz-state";
import { ArrowRight, CircleCheck, CircleX } from "lucide-react";
import Image from "next/image";

const QuizBody = () => {
  const { currentIndex, nextQuestion, selectedAnswer, setSelectedAnswer } =
    useQuizStore();

  return (
    <div className="flex flex-col items-center w-full px-4 gap-2 lg:justify-center flex-1">
      <Image
        alt="flag"
        src={`/images/${flags[currentIndex].country}.svg`}
        width="300"
        height="250"
        className="w-auto h-auto lg:w-[400px] lg:h-[250px] rounded-sm"
      />
      <div className="grid grid-cols-1 gap-2 w-full pt-10 md:grid-cols-2 lg:w-[50%]">
        {flags[currentIndex].answers.map((answer) => (
          <Button
            key={answer}
            size="lg"
            variant="outline"
            className="relative w-full px-2 capitalize dark:bg-stone-800"
            onClick={() => setSelectedAnswer(answer)}
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
      {selectedAnswer && (
        <Button
          size="lg"
          variant="outline"
          className="w-full mt-4 flex items-center gap-2 font-bold dark:bg-stone-800 lg:w-[50%] animate-fade animate-duration-500 animate-ease-in-out"
          onClick={() => nextQuestion()}
          disabled={currentIndex === flags.length - 1}
        >
          Next
          <ArrowRight />
        </Button>
      )}
    </div>
  );
};

export default QuizBody;
