"use client";

import { Card } from "@/components/ui/card";
import { flags } from "@/data/mocks";
import { useQuizStore } from "@/hooks/quiz-state";
import { useEffect } from "react";
import QuizBody from "./_components/body";
import QuizHeader from "./_components/header";
import NavBar from "./_components/navbar";
import StartPage from "./_components/start";

const HomePage = () => {
  const { hasStarted, setMaxIndex } = useQuizStore();

  useEffect(() => {
    setMaxIndex(flags.length);
  }, [setMaxIndex]);

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
