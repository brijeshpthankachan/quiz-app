"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import NavBar from "./_components/navbar";
import Image from "next/image";
import { CircleCheck, CircleX } from "lucide-react";

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

const QuizHeader = (props: any) => {
  const [timer, setTimer] = useState(10);
  const { flagNo, totalNo } = props;
  const intervalRef = useRef<any | null>(null);

  useEffect(() => {
    if (Boolean(props.selected && intervalRef.current)) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimer((prev) => (prev === 0 ? prev : prev - 1));
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [props.selected]);

  useEffect(() => {
    setTimer(10);
  }, [props.flagNo]);

  return (
    <div className="h-[67px]  overflow-hidden p-2 flex items-center border border-b-blue-100 justify-between px-7">
      <p className="capitalize font-semibold">name that world flag</p>
      <div className="flex items-center gap-3">
        {timer === 0 && <span>Time&apos;s up!</span>}

        <div className="flex justify-center items-center  w-[50px] h-[50px]  rounded-full border-[2px] border-blue-100">
          {timer}
        </div>
        <p>{`${flagNo + 1} of ${totalNo}`}</p>
        <p>Score : 0</p>
      </div>
    </div>
  );
};

const QuizBody = (props: any) => {
  return (
    <div className="h-full  rounded-sm flex items-center justify-center flex-col gap-2">
      <Image
        alt="image"
        src={`/images/${props.flags[props.flagNo].name}.svg`}
        width={300}
        height={300}
      />
      <div className="grid grid-cols-2 gap-4">
        {props.flags[props.flagNo].options.map(
          (option: string, index: number) => (
            <Button
              className={`w-[18rem] border-2 rounded-md relative ${
                option === props.selected
                  ? props.selected === props.flags[props.flagNo].name
                    ? "border-green-700"
                    : ""
                  : "border-blue-300 hover:border-blue-700"
              } `}
              variant={"outline"}
              key={index}
              onClick={() => props.setSelected(option)}
            >
              {option}
              {option === props.selected &&
                props.selected === props.flags[props.flagNo].name && (
                  <CircleCheck className="absolute right-2" color="green" />
                )}
              {option === props.selected &&
                props.selected !== props.flags[props.flagNo].name && (
                  <CircleX className="absolute right-2" color="red" />
                )}
            </Button>
          )
        )}
      </div>
      {props.selected && (
        <Button
          onClick={() => {
            props.changeFlag();
            props.setSelected(null);
          }}
          disabled={props.flagNo === props.flags.length - 1}
        >
          Next Image
        </Button>
      )}
    </div>
  );
};

const HomePage = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const flags: Array<{ name: string; options: Array<string> }> = [
    {
      name: "afghanistan",
      options: ["afghanistan", "albania", "algeria", "andorra"],
    },
    {
      name: "albania",
      options: ["albania", "afghanistan", "algeria", "andorra"],
    },
    {
      name: "algeria",
      options: ["albania", "afghanistan", "algeria", "andorra"],
    },
    {
      name: "andorra",
      options: ["albania", "afghanistan", "algeria", "andorra"],
    },
    {
      name: "angola",
      options: ["albania", "angola", "algeria", "andorra"],
    },
  ];
  const [flagNo, setFlagNo] = useState(0);
  const changeFlag = () => {
    setFlagNo((next) => next + 1);
  };

  return (
    <div className="h-full bg-gray-100 dark:bg-slate-700">
      <NavBar />
      <div className="flex justify-center items-center h-full bg-inherit dark:bg-slate-700">
        <Card className="w-3/4 h-2/3 dark:bg-slate-800">
          {hasStarted ? (
            <>
              <QuizHeader
                flagNo={flagNo}
                totalNo={flags.length}
                selected={selected}
              />
              <QuizBody
                flags={flags}
                flagNo={flagNo}
                changeFlag={changeFlag}
                selected={selected}
                setSelected={setSelected}
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
