import { flags } from "@/data/mocks";
import { useQuizStore } from "@/hooks/quiz-state";
import Image from "next/image";

const Flag = () => {
  const { currentIndex } = useQuizStore();

  return (
    <Image
      alt="flag"
      src={`/images/${flags[currentIndex].country}.svg`}
      width="300"
      height="250"
      className="w-[99%] h-[210px] lg:w-[400px] lg:h-[250px] rounded-sm"
    />
  );
};

export default Flag;
