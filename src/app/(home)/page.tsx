"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { timerClass } from "@/lib/styles";
import { useQuizStore } from "@/store/quiz-state";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "./_components/navbar";

const flags = [
  {
    country: "afghanistan",
  },
  {
    country: "albania",
  },
  {
    country: "algeria",
  },
  {
    country: "andorra",
  },
  {
    country: "angola",
  },
];

const StartPage = () => {
  const { startQuiz } = useQuizStore();

  return (
    <CardContent className="flex justify-center items-center h-full">
      <div className="absolute mb-[15.5rem] border border-black-900 px-2 py-1 rounded-sm dark:bg-slate-600">
        Geography & Travel
      </div>
      <Card className="h-[250px] dark:bg-slate-600 w-full lg:w-1/3 p-5">
        <CardContent className="font-bold text-4xl capitalize text-center pt-4">
          name that world flag !
        </CardContent>

        <Button
          className="capitalize dark:bg-slate-700 dark:text-white w-full text-lg"
          size="lg"
          onClick={startQuiz}
        >
          start
        </Button>

        <CardFooter className="flex justify-between pt-5 px-0">
          <p className="text-sm">35 Questions</p>
          <div className="flex items-center gap-2">
            <p className="text-sm">Timer bonus</p>

            <Switch />
          </div>
        </CardFooter>
      </Card>
    </CardContent>
  );
};

const QuizHeader = () => {
  const { currentIndex, maxIndex } = useQuizStore();

  return (
    <div className="h-[67px] overflow-hidden p-2 flex items-center border-b border-b-blue-100 lg:border rounded-sm justify-between md:px-7">
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

const Timer = () => {
  const { shouldResetTimer, disableNextButton } = useQuizStore();
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          disableNextButton();
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setTimer(10);
  }, [shouldResetTimer]);

  return (
    <div className="flex items-center">
      {timer === 0 ? (
        <span className="bg-red-700 order-last lg:order-first w-[100px] text-center text-white px-2 rounded-xl text-sm lg:rounded-r-none -ml-3 lg:-mr-1 lg:ml-0 h-[20px] z-0 animate-fade-up duration-500">
          Time&apos;s up!
        </span>
      ) : null}
      <div
        className={`z-10 ${timerClass({
          timer: timer === 0 ? "finished" : "running",
        })}`}
      >
        {timer}
      </div>
    </div>
  );
};

const QuizBody = () => {
  const { currentIndex, isNextButtonDisabled, nextQuestion } = useQuizStore();

  return (
    <div className="w-full h-full rounded-sm flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <Image
          alt="flag"
          src={`/images/${flags[currentIndex].country}.svg`}
          width="300"
          height="250"
          className="rounded-sm"
        />

        <Button
          size="lg"
          onClick={nextQuestion}
          disabled={isNextButtonDisabled}
        >
          Next -&gt;
        </Button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const { hasStarted, setMaxIndex } = useQuizStore();

  useEffect(() => {
    setMaxIndex(flags.length);
  }, []);

  return (
    <div className="h-full bg-gray-100 dark:bg-slate-700 w-full overflow-hidden rounded-sm">
      <NavBar />
      <div className="flex justify-center lg:items-center pt-16 lg:pt-0 h-full bg-inherit dark:bg-slate-700 w-full ">
        <Card className="lg:shadow-lg w-[100%] md:w-[90%] lg:w-3/4 h-2/3 bg-inherit border-none lg:border-2 border-gray-600 lg:dark:bg-slate-800">
          {hasStarted ? (
            <>
              <QuizHeader />
              <QuizBody />
            </>
          ) : (
            <StartPage />
          )}
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
