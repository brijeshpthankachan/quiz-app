import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useQuizStore } from "@/hooks/quiz-state";
import { Switch } from "@radix-ui/react-switch";

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

export default StartPage;
