import Hud from "./header-hud";

const QuizHeader = () => {
  return (
    <div className="h-[67px] p-2 flex items-center border-b border-b-blue-100 justify-between md:px-7">
      <Hud />
    </div>
  );
};

export default QuizHeader;
