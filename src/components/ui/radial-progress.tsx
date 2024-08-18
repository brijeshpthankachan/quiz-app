import { MAX_TIME, THEME } from "@/configs/app.config";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const RadialProgressBar = ({
  progress,
  flip,
  width,
  height,
  child,
  stroke = 4,
  duration = 500,
}: {
  progress: number;
  flip?: boolean;
  width: number;
  height: number;
  child?: JSX.Element;
  stroke?: number;
  duration?: number;
}) => {
  const circumference = 2 * Math.PI * 45;
  const [offset, setOffset] = useState(30);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const progressOffset = (progress / MAX_TIME) * circumference;
    setOffset(circumference - progressOffset);
  }, [progress, circumference, flip]);

  return (
    <div
      className={`relative w-[${width}] h-[${height}] flex justify-center items-center z-10`}
    >
      <svg
        className="transform -rotate-90"
        width={width}
        height={height}
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r={45}
          stroke="#e5e7eb" // Tailwind gray-200
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={45}
          stroke="#4f46e5" // Tailwind indigo-600
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill={resolvedTheme === THEME.LIGHT ? "white" : "#57534e"}
          className={`transition-all duration-1000 ease-in-out`}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute text-sm font-semibold text-gray-800 dark:text-white">
        {child ? child : <p>{progress}</p>}
      </div>
    </div>
  );
};

export default RadialProgressBar;
