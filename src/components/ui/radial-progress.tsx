import { MAX_TIME, THEME } from "@/configs/app.config";
import { useTheme } from "next-themes";

const CircularProgressBar = ({ progress }: { progress: number }) => {
  const radius = 45; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const progressPercentage = (progress / MAX_TIME) * 100;
  const offset = circumference - (progressPercentage / 100) * circumference;
  const { resolvedTheme } = useTheme();

  return (
    <div className="relative w-[60px] h-[60px] flex justify-center items-center z-10">
      <svg
        className="transform -rotate-90"
        width="60"
        height="60"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb" // Tailwind gray-200
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#4f46e5" // Tailwind indigo-600
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill={resolvedTheme === THEME.LIGHT ? "white" : "#57534e"}
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      <p className="absolute text-sm font-semibold text-gray-800 dark:text-white">
        {progress}
      </p>
    </div>
  );
};

export default CircularProgressBar;
