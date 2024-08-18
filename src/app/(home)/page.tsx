"use client";

import { Card } from "@/components/ui/card";
import { flags } from "@/data/mocks";
import { useQuizStore } from "@/hooks/quiz-state";
import { useEffect } from "react";
import QuizBody from "./_components/body";
import QuizHeader from "./_components/header";
import NavBar from "./_components/navbar";
import ScoreBoard from "./_components/score-board";

const HomePage = () => {
  const { hasStarted, setMaxIndex } = useQuizStore();

  useEffect(() => {
    setMaxIndex(flags.length);
  }, [setMaxIndex]);

  return (
    <div className="w-full h-full">
      <NavBar />
      <div className="flex justify-center h-[calc(100%-60px)] lg:items-center lg:pt-0 dark:bg-stone-700">
        <Card className="flex flex-col w-full h-full bg-inherit border-none lg:border-2 lg:border-gray-600 lg:w-3/4 lg:h-2/3 md:w-[90%] lg:shadow-lg">
          {hasStarted ? (
            <>
              <QuizHeader />
              <QuizBody />
            </>
          ) : (
            // <StartPage />
            <ScoreBoard />
          )}
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
