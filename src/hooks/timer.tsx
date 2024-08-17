/* eslint-disable react-hooks/exhaustive-deps */
import { MAX_TIME } from "@/configs/app.config";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useQuizStore } from "./quiz-state";

const useTimer = ({ onTimeUp }: any) => {
  const [timeLeft, setTimeLeft] = useState(MAX_TIME);
  const { currentIndex, selectedAnswer } = useQuizStore();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const clearExistingInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    if (selectedAnswer) {
      clearExistingInterval();
      return;
    }

    clearExistingInterval();
    setTimeLeft(MAX_TIME);

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev: number) => {
        if (prev === 0) {
          clearExistingInterval();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return clearExistingInterval;
  }, [currentIndex, selectedAnswer]);

  useLayoutEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft]);

  return {
    timeLeft,
    isTimeUp: timeLeft === 0,
  };
};

export default useTimer;
