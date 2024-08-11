"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NavBar from "./_components/navbar";

type StartPageProps = {
  onQuizStart: Dispatch<SetStateAction<boolean>>;
};

const StartPage = (props: StartPageProps) => {
  return (
    <CardContent className="flex justify-center items-center h-full">
      <div className="absolute mb-[15.5rem] border border-black-900 px-2 py-1 rounded-sm dark:bg-slate-600">
        Geography & Travel
      </div>
      <Card className="h-[250px] dark:bg-slate-600 w-1/3 p-5">
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

const QuizHeader = () => {
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="h-[67px]  overflow-hidden p-2 flex items-center border border-b-blue-100 justify-between px-7">
      <p className="capitalize font-semibold">name that world flag</p>
      <div className="flex items-center gap-3">
        <span>Time&apos;s up!</span>
        <div className="flex justify-center items-center  w-[50px] h-[50px]  rounded-full border-[2px] border-blue-100">
          {timer}
        </div>
        <p>1 of 35</p>
        <p>Score : 0</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="h-full bg-gray-100 dark:bg-slate-700">
      <NavBar />
      <div className="flex justify-center items-center h-full bg-inherit dark:bg-slate-700">
        <Card className="w-3/4 h-2/3 dark:bg-slate-800">
          {hasStarted ? (
            <QuizHeader />
          ) : (
            <StartPage onQuizStart={setHasStarted} />
          )}
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
