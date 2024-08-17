import { Button } from "@/components/ui/button";
import { flags } from "@/data/mocks";
import { useQuizStore } from "@/hooks/quiz-state";
import { ArrowRight, CircleCheck, CircleX } from "lucide-react";
import Image from "next/image";

const QuizBody = () => {
  const { currentIndex, nextQuestion, selectedAnswer, setSelectedAnswer } =
    useQuizStore();

  return (
    <div className="w-full h-full rounded-sm flex justify-center items-center">
      <div className="flex flex-col gap-2 w-full justify-center items-center">
        <Image
          alt="flag"
          src={`/images/${flags[currentIndex].country}.svg`}
          width="300"
          height="250"
          className="rounded-sm w-[450px] h-[300px]"
        />
        <div className="w-full flex flex-col items-center justify-center relative h-[160px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-[50%] absolute top-0">
            {flags[currentIndex].answers.map((answer) => (
              <Button
                key={answer}
                size="lg"
                className="border border-green-700 capitalize px-2 relative"
                variant="outline"
                onClick={() => {
                  setSelectedAnswer(answer);
                }}
                disabled={selectedAnswer !== null && answer !== selectedAnswer}
              >
                <span className="text-center w-full">{answer}</span>
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
              onClick={() => {
                nextQuestion();
              }}
              disabled={
                selectedAnswer === null || currentIndex === flags.length - 1
              }
              variant={"secondary"}
              className="w-[50%] absolute bottom-0 flex gap-2 items-center text-blue-800 font-bold animate-fade animate-duration-500 animate-ease-in-out"
            >
              Next
              <ArrowRight />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizBody;
