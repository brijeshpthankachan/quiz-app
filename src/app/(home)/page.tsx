"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { timerClass } from "@/lib/styles";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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

type StartPageProps = {
  onQuizStart: Dispatch<SetStateAction<boolean>>;
};

const StartPage = (props: StartPageProps) => {
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
          onClick={() => {
            props.onQuizStart(true);
          }}
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

const QuizHeader = (props: QuizHeaderProps) => {
  return (
    <div className="h-[67px] overflow-hidden p-2 flex items-center border-b border-b-blue-100 lg:border rounded-sm justify-between md:px-7">
      <p className="capitalize font-semibold hidden lg:block">
        name that world flag!
      </p>
      <div className="flex items-center gap-3 w-full lg:w-auto justify-between">
        <Timer
          shouldResetTimer={props.shouldResetTimer}
          setIsNextButtonDisabled={props.setIsNextButtonDisabled}
        />
        <p>
          {props.currentIndex} of {props.maxIndex}
        </p>
        <p>Score : 0</p>
      </div>
    </div>
  );
};

type TimerProps = {
  shouldResetTimer: boolean;
  setIsNextButtonDisabled: Dispatch<SetStateAction<boolean>>;
};

const Timer = (props: TimerProps) => {
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          props.setIsNextButtonDisabled(true);
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
  }, [props.shouldResetTimer]);

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

type QuizHeaderProps = {
  currentIndex: number;
  maxIndex: number;
  shouldResetTimer: boolean;
  setIsNextButtonDisabled: Dispatch<SetStateAction<boolean>>;
};

type QuizBodyProps = {
  onIndexChange: () => void;
  currentIndex: number;
  maxIndex: number;
  isNextButtonDisabled: boolean;
};

const QuizBody = (props: QuizBodyProps) => {
  return (
    <div className="w-full h-full rounded-sm flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <Image
          alt="flag"
          src={`/images/${flags[props.currentIndex].country}.svg`}
          width="300"
          height="250"
          className="rounded-sm"
        />

        <Button
          size="lg"
          onClick={props.onIndexChange}
          disabled={props.isNextButtonDisabled}
        >
          Next -&gt;
        </Button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const maxIndex = flags.length - 1;
  const [shouldResetTimer, setShouldResetTimer] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  return (
    <div className="h-full bg-gray-100 dark:bg-slate-700 w-full overflow-hidden rounded-sm">
      <NavBar />
      <div className="flex justify-center lg:items-center pt-16 lg:pt-0 h-full bg-inherit dark:bg-slate-700 w-full ">
        <Card className="lg:shadow-lg w-[100%] md:w-[90%] lg:w-3/4 h-2/3 bg-inherit border-none lg:border-2 border-gray-600 lg:dark:bg-slate-800">
          {hasStarted ? (
            <>
              <QuizHeader
                currentIndex={index + 1}
                maxIndex={maxIndex + 1}
                shouldResetTimer={shouldResetTimer}
                setIsNextButtonDisabled={setIsNextButtonDisabled}
              />
              <QuizBody
                currentIndex={index}
                maxIndex={maxIndex}
                onIndexChange={() => {
                  setIndex((prev) => prev + 1);
                  setShouldResetTimer(!shouldResetTimer);
                }}
                isNextButtonDisabled={
                  isNextButtonDisabled || index === maxIndex
                }
              />
            </>
          ) : (
            <StartPage onQuizStart={setHasStarted} />
          )}
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
